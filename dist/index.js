module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const core = __webpack_require__(173);
const github = __webpack_require__(687);
const fetch = __webpack_require__(932);
const report = __webpack_require__(574);

try {
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


/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 687:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 932:
/***/ ((module) => {

module.exports = eval("require")("isomorphic-fetch");


/***/ }),

/***/ 574:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"stats\":{\"suites\":1,\"tests\":3,\"passes\":3,\"pending\":0,\"failures\":0,\"start\":\"2020-11-22T15:55:07.852Z\",\"end\":\"2020-11-22T15:55:08.052Z\",\"duration\":184,\"testsRegistered\":3,\"passPercent\":100,\"pendingPercent\":0,\"other\":0,\"hasOther\":false,\"skipped\":0,\"hasSkipped\":false},\"results\":[{\"uuid\":\"8d38e0b3-7002-4299-918a-6aa1af232c21\",\"title\":\"\",\"fullFile\":\"cypress/integration/myFirstWebsite.js\",\"file\":\"cypress/integration/myFirstWebsite.js\",\"beforeHooks\":[],\"afterHooks\":[],\"tests\":[],\"suites\":[{\"uuid\":\"3ee6a77d-9530-4768-adda-a98bf31a7b32\",\"title\":\"My First Website\",\"fullFile\":\"\",\"file\":\"\",\"beforeHooks\":[],\"afterHooks\":[],\"tests\":[{\"title\":\"Has the correct title\",\"fullTitle\":\"My First Website Has the correct title\",\"timedOut\":null,\"duration\":94,\"state\":\"passed\",\"speed\":\"slow\",\"pass\":true,\"fail\":false,\"pending\":false,\"context\":null,\"code\":\"expect(cy.title(), \\\"Hello World\\\");\",\"err\":{},\"uuid\":\"8a9b883b-3440-43fb-92e3-5784dd343721\",\"parentUUID\":\"3ee6a77d-9530-4768-adda-a98bf31a7b32\",\"isHook\":false,\"skipped\":false},{\"title\":\"Has an H2\",\"fullTitle\":\"My First Website Has an H2\",\"timedOut\":null,\"duration\":48,\"state\":\"passed\",\"speed\":\"medium\",\"pass\":true,\"fail\":false,\"pending\":false,\"context\":null,\"code\":\"expect(cy.get(\\\"h2\\\")).exist;\",\"err\":{},\"uuid\":\"28757a45-ad1a-48d0-b47f-8b1deef06a9c\",\"parentUUID\":\"3ee6a77d-9530-4768-adda-a98bf31a7b32\",\"isHook\":false,\"skipped\":false},{\"title\":\"Has an H2 with the correct text\",\"fullTitle\":\"My First Website Has an H2 with the correct text\",\"timedOut\":null,\"duration\":42,\"state\":\"passed\",\"speed\":\"medium\",\"pass\":true,\"fail\":false,\"pending\":false,\"context\":null,\"code\":\"cy.get(\\\"h2\\\").contains(\\\"My First Website\\\");\",\"err\":{},\"uuid\":\"91c55264-d5fe-4bfd-b64f-ed51316aa216\",\"parentUUID\":\"3ee6a77d-9530-4768-adda-a98bf31a7b32\",\"isHook\":false,\"skipped\":false}],\"suites\":[],\"passes\":[\"8a9b883b-3440-43fb-92e3-5784dd343721\",\"28757a45-ad1a-48d0-b47f-8b1deef06a9c\",\"91c55264-d5fe-4bfd-b64f-ed51316aa216\"],\"failures\":[],\"pending\":[],\"skipped\":[],\"duration\":184,\"root\":false,\"rootEmpty\":false,\"_timeout\":2000}],\"passes\":[],\"failures\":[],\"pending\":[],\"skipped\":[],\"duration\":0,\"root\":true,\"rootEmpty\":true,\"_timeout\":2000}],\"meta\":{\"mocha\":{\"version\":\"7.0.1\"},\"mochawesome\":{\"options\":{\"quiet\":false,\"reportFilename\":\"mochawesome\",\"saveHtml\":true,\"saveJson\":true,\"consoleReporter\":\"spec\",\"useInlineDiffs\":false,\"code\":true},\"version\":\"6.2.1\"},\"marge\":{\"options\":null,\"version\":\"5.1.0\"}}}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(977);
/******/ })()
;