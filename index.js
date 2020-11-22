const fs = require("fs");
const core = require("@actions/core");
const github = require("@actions/github");
const fetch = require("isomorphic-fetch");

try {
  const report = JSON.parse(fs.readFileSync("./cypress-tests-report.json"));
  console.log(
    "Capturing score for ",
    github.context.repo.owner,
    " on repo ",
    github.context.repo.repo
  );
  fetch("https://cyolrzfuz3.execute-api.us-east-1.amazonaws.com/dev/grade", {
    method: "POST",
    body: JSON.stringify({
      student: github.context.repo.owner,
      project: github.context.repo.repo,
      score: report.stats.passPercent,
    }),
  }).then(() => {
    core.setOutput("score", report.stats.passPercent);
  });
} catch (error) {
  core.setFailed(error.message);
}
