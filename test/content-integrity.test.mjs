import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const DOCS_FILE = path.resolve(process.cwd(), "app/docs/page.tsx");
const COMPONENTS_DIR = path.resolve(process.cwd(), "components");

describe("Content & Route Integrity Tests", () => {
  it("verifies docs sidebar links match article section IDs 1-to-1", () => {
    const docsContent = fs.readFileSync(DOCS_FILE, "utf-8");

    // Extract sidebar anchors
    const sidebarMatch = docsContent.match(/<aside[\s\S]*?<\/aside>/);
    assert.ok(sidebarMatch, "Docs page must contain <aside> sidebar menu");

    const sidebarHrefs = [
      ...sidebarMatch[0].matchAll(/<a\s+href="#([^"]+)"/g),
    ].map((m) => m[1]);

    // Extract article section IDs
    const sectionIds = [
      ...docsContent.matchAll(/<section\s+id="([^"]+)"/g),
    ].map((m) => m[1]);

    assert.ok(sidebarHrefs.length > 0, "Sidebar must have navigation links");
    assert.deepEqual(
      sidebarHrefs,
      sectionIds,
      "Sidebar href anchors must match article section IDs exactly in order and identity"
    );
  });

  it("verifies docs article section numbers are strictly sequential with no duplicates or gaps", () => {
    const docsContent = fs.readFileSync(DOCS_FILE, "utf-8");

    // Extract section heading numbers from spans inside h2 or article
    // e.g. <span>2. Official TypeScript SDK...</span>
    const headingMatches = [
      ...docsContent.matchAll(/<span>(\d+)\.\s+[^<]+<\/span>/g),
    ];

    const numbers = headingMatches.map((m) => parseInt(m[1], 10));

    assert.ok(numbers.length >= 10, "Expected at least 10 numbered sections");

    // Check for duplicates
    const seen = new Set();
    const duplicates = [];
    for (const num of numbers) {
      if (seen.has(num)) {
        duplicates.push(num);
      }
      seen.add(num);
    }
    assert.deepEqual(
      duplicates,
      [],
      `Duplicate section numbers found: ${duplicates.join(", ")}`
    );

    // Check for sequential ordering (e.g. 2, 3, 4, 5... or 1, 2, 3...)
    for (let i = 1; i < numbers.length; i++) {
      const prev = numbers[i - 1];
      const curr = numbers[i];
      assert.equal(
        curr,
        prev + 1,
        `Section numbering gap or misordering: section ${prev} is followed by ${curr}`
      );
    }
  });

  it("verifies all component anchor links point to existing target IDs", () => {
    // Gather all known IDs in page components
    const knownIds = new Set();

    function scanForIds(filePath) {
      const content = fs.readFileSync(filePath, "utf-8");
      const matches = content.matchAll(/\bid="([^"]+)"/g);
      for (const m of matches) {
        knownIds.add(m[1]);
      }
    }

    scanForIds(DOCS_FILE);

    for (const file of fs.readdirSync(COMPONENTS_DIR)) {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        scanForIds(path.join(COMPONENTS_DIR, file));
      }
    }

    // Now check all component links
    const invalidLinks = [];

    for (const file of fs.readdirSync(COMPONENTS_DIR)) {
      if (!file.endsWith(".tsx")) continue;
      const filePath = path.join(COMPONENTS_DIR, file);
      const content = fs.readFileSync(filePath, "utf-8");

      const linkMatches = content.matchAll(/href=["']([^"']+)["']/g);
      for (const m of linkMatches) {
        const href = m[1];

        // Check if it's an anchor to a known ID
        if (href.startsWith("/#") || href.startsWith("#")) {
          const id = href.replace(/^\/?#/, "");
          if (id && !knownIds.has(id)) {
            invalidLinks.push({ file, href, missingId: id });
          }
        } else if (href.startsWith("/docs/#") || href.startsWith("/docs#")) {
          const id = href.split("#")[1];
          if (id && !knownIds.has(id)) {
            invalidLinks.push({ file, href, missingId: id });
          }
        }
      }
    }

    assert.deepEqual(
      invalidLinks,
      [],
      `Found component links pointing to nonexistent element IDs: ${JSON.stringify(invalidLinks, null, 2)}`
    );
  });
});
