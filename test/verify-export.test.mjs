import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(process.cwd(), "out");
const FORBIDDEN_KEYWORDS = [
  "bifrost",
  "switchyard",
  "nemo",
];

describe("Static Export Verification (./out)", () => {
  it("generates required root deployment files", () => {
    assert.ok(fs.existsSync(OUT_DIR), "Output directory ./out must exist");
    assert.ok(
      fs.existsSync(path.join(OUT_DIR, "index.html")),
      "./out/index.html must exist"
    );
    assert.ok(
      fs.existsSync(path.join(OUT_DIR, "docs", "index.html")),
      "./out/docs/index.html must exist"
    );
    assert.ok(
      fs.existsSync(path.join(OUT_DIR, "404.html")),
      "./out/404.html must exist"
    );
    assert.ok(
      fs.existsSync(path.join(OUT_DIR, "CNAME")),
      "./out/CNAME must exist for GitHub Pages custom domain"
    );
    const cname = fs.readFileSync(path.join(OUT_DIR, "CNAME"), "utf-8").trim();
    assert.equal(cname, "billama.net", "CNAME must be set to billama.net");
  });

  it("ensures no proprietary keywords are leaked in generated static HTML or JS bundles", () => {
    const filesToScan = [];

    function walkDir(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (/\.(html|js|txt)$/.test(entry.name)) {
          filesToScan.push(fullPath);
        }
      }
    }

    walkDir(OUT_DIR);
    assert.ok(filesToScan.length > 0, "Should have files in ./out to scan");

    const violations = [];

    for (const file of filesToScan) {
      const content = fs.readFileSync(file, "utf-8");
      for (const kw of FORBIDDEN_KEYWORDS) {
        const regex = new RegExp(`\\b${kw}\\b`, "i");
        if (regex.test(content)) {
          violations.push({
            file: path.relative(process.cwd(), file),
            keyword: kw,
          });
        }
      }
    }

    assert.deepEqual(
      violations,
      [],
      `Found proprietary keywords in output files: ${JSON.stringify(violations, null, 2)}`
    );
  });

  it("verifies all internal anchor links resolve to valid IDs across all pages", () => {
    const indexHtml = fs.readFileSync(path.join(OUT_DIR, "index.html"), "utf-8");
    const docsHtml = fs.readFileSync(path.join(OUT_DIR, "docs", "index.html"), "utf-8");

    const extractIds = (html) => {
      const ids = new Set();
      const matches = html.matchAll(/id="([^"]+)"/g);
      for (const m of matches) {
        ids.add(m[1]);
      }
      return ids;
    };

    const indexIds = extractIds(indexHtml);
    const docsIds = extractIds(docsHtml);

    const pages = [
      { name: "index.html", html: indexHtml, currentIds: indexIds },
      { name: "docs/index.html", html: docsHtml, currentIds: docsIds },
    ];

    const brokenLinks = [];

    for (const page of pages) {
      const hrefMatches = page.html.matchAll(/href="([^"]+)"/g);
      for (const m of hrefMatches) {
        const href = m[1];

        // Skip external, protocol, assets, and data URLs
        if (
          href.startsWith("http://") ||
          href.startsWith("https://") ||
          href.startsWith("data:") ||
          href.startsWith("/_next/") ||
          href === "/"
        ) {
          continue;
        }

        // Relative anchor within current page (e.g. #features or #billama-sdk)
        if (href.startsWith("#")) {
          const targetId = href.substring(1);
          if (!page.currentIds.has(targetId)) {
            brokenLinks.push({
              sourcePage: page.name,
              href,
              reason: `Target ID #${targetId} not found in ${page.name}`,
            });
          }
        }
        // Root page anchor (e.g. /#features)
        else if (href.startsWith("/#")) {
          const targetId = href.substring(2);
          if (!indexIds.has(targetId)) {
            brokenLinks.push({
              sourcePage: page.name,
              href,
              reason: `Target ID #${targetId} not found in root index.html`,
            });
          }
        }
        // Docs page anchor (e.g. /docs/#billama-sdk or /docs#...)
        else if (href.startsWith("/docs/#") || href.startsWith("/docs#")) {
          const targetId = href.includes("#") ? href.split("#")[1] : "";
          if (targetId && !docsIds.has(targetId)) {
            brokenLinks.push({
              sourcePage: page.name,
              href,
              reason: `Target ID #${targetId} not found in docs/index.html`,
            });
          }
        }
        // Direct route link /docs/
        else if (href === "/docs/" || href === "/docs") {
          if (!fs.existsSync(path.join(OUT_DIR, "docs", "index.html"))) {
            brokenLinks.push({
              sourcePage: page.name,
              href,
              reason: "Documentation page docs/index.html does not exist",
            });
          }
        }
      }
    }

    assert.deepEqual(
      brokenLinks,
      [],
      `Found broken internal links or anchor targets: ${JSON.stringify(brokenLinks, null, 2)}`
    );
  });
});
