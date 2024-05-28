(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 609:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Cousine_0abcf9', '__Cousine_Fallback_0abcf9'","fontStyle":"normal"},
	"className": "__className_0abcf9",
	"variable": "__variable_0abcf9"
};


/***/ }),

/***/ 517:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_556910', '__Inter_Fallback_556910'","fontStyle":"normal"},
	"className": "__className_556910",
	"variable": "__variable_556910"
};


/***/ }),

/***/ 693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src\\pages\\_app.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter","display":"swap"}],"variableName":"inter"}
var target_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_ = __webpack_require__(517);
var target_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src\\pages\\_app.tsx","import":"Cousine","arguments":[{"weight":["400","700"],"subsets":["latin"],"variable":"--font-cousine","display":"swap"}],"variableName":"cousine"}
var target_path_src_pages_app_tsx_import_Cousine_arguments_weight_400_700_subsets_latin_variable_font_cousine_display_swap_variableName_cousine_ = __webpack_require__(609);
var target_path_src_pages_app_tsx_import_Cousine_arguments_weight_400_700_subsets_latin_variable_font_cousine_display_swap_variableName_cousine_default = /*#__PURE__*/__webpack_require__.n(target_path_src_pages_app_tsx_import_Cousine_arguments_weight_400_700_subsets_latin_variable_font_cousine_display_swap_variableName_cousine_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/utils/gtag.ts
/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */ const pageview = (url, trackingId)=>{
    if (!window?.gtag) {
        if (false) {}
        return;
    }
    window.gtag("config", trackingId, {
        page_path: url
    });
};

;// CONCATENATED MODULE: ./src/components/gtag.tsx




const gaTrackingId = "G-D0K1FGG74W";
const Gtag = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        pageview(location.pathname, gaTrackingId);
    }, [
        router?.asPath
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                async: true,
                id: "gtag-init",
                dangerouslySetInnerHTML: {
                    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTrackingId}', {
        page_path: window.location.pathname
      });
    `
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Gtag, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `bg-background ${(target_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default()).variable} ${(target_path_src_pages_app_tsx_import_Cousine_arguments_weight_400_700_subsets_latin_variable_font_cousine_display_swap_variableName_cousine_default()).variable} font-body text-text`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(693));
module.exports = __webpack_exports__;

})();