import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const WORKFLOW = path.resolve(process.cwd(), ".github/workflows/deploy.yml");

function jobBlock(yaml, name) {
  const start = yaml.search(new RegExp(`^  ${name}:\\s*$`, "m"));
  assert.ok(start >= 0, `workflow must define the ${name} job`);
  const rest = yaml.slice(start);
  const next = rest.slice(1).search(/^  [a-zA-Z0-9_-]+:\s*$/m);
  return next === -1 ? rest : rest.slice(0, next + 1);
}

describe("GitHub Actions deploy hardening", () => {
  const yaml = fs.readFileSync(WORKFLOW, "utf8");
  const build = jobBlock(yaml, "build");
  const deploy = jobBlock(yaml, "deploy");

  it("pins every action to a full commit SHA", () => {
    const uses = [...yaml.matchAll(/^\s*uses:\s*(\S+)/gm)].map((m) => m[1]);
    assert.ok(uses.length >= 6, "expected the six deploy actions");
    for (const action of uses) {
      assert.match(
        action,
        /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+@[0-9a-f]{40}$/,
        `${action} must be owner/name@<40 hex>, not a movable tag`
      );
    }
    assert.equal(
      uses.filter((action) => action.endsWith("@v4") || action.endsWith("@v3") || action.endsWith("@v5")).length,
      0
    );
  });

  it("does not give the install job Pages deploy credentials", () => {
    assert.match(build, /permissions:\n(?:      .+\n)*?      contents: read\n/);
    assert.doesNotMatch(build, /pages:\s*write/);
    assert.doesNotMatch(build, /id-token:\s*write/);
    assert.match(build, /persist-credentials:\s*false/);
  });

  it("keeps Pages publish credentials on the deploy job only", () => {
    assert.match(deploy, /pages:\s*write/);
    assert.match(deploy, /id-token:\s*write/);
    assert.match(deploy, /github\.event_name != 'pull_request'/);
    assert.match(deploy, /github\.ref == 'refs\/heads\/main'/);
    assert.match(build, /if: github\.event_name != 'pull_request'/);
  });

  it("pins the pnpm release and keeps pull requests out of the production queue", () => {
    assert.match(yaml, /version:\s*12\.12\.1/);
    assert.doesNotMatch(yaml, /version:\s*12\s*$/m);
    assert.match(yaml, /concurrency:/);
    assert.doesNotMatch(yaml, /group:\s*"pages"/);
    assert.match(yaml, /github\.ref/);
  });
});
