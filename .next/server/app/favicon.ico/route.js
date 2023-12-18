"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata__
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fjoaquinmetayer%2FDownloads%2Fcode%2Fjoaquinmetayer.com%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/Users/joaquinmetayer/Downloads/code/joaquinmetayer.com/app/favicon.ico?__next_metadata__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,572], () => (__webpack_exec__(7419)));
module.exports = __webpack_exports__;

})();