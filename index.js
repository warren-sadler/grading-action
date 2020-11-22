const core = require("@actions/core");
const github = require("@actions/github");
const report = require("./cypress-tests-report.json");

try {
  console.log(
    "Capturing score for ",
    github.context.repo.owner,
    " on repo ",
    github.context.repo.repo
  );
  core.setOutput("score", report.stats.passPercent);
} catch (error) {
  core.setFailed(error.message);
}
