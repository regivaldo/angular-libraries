(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('simple-gtm', ['exports', '@angular/core'], factory) :
    (factory((global['simple-gtm'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Simple Google Tag Manager Service
     *
     * This service generate a script tag and
     * set trigger a custom events
     *
     * \@example
     * import { SimpleGtmService } from 'simple-gtm';
     *
     * constructor(private sgtm: SimpleGtmService) {}
     */
    var SimpleGtmService = /** @class */ (function () {
        /**
         * @ignore
         */
        function SimpleGtmService() {
            this.dataLayer = window['dataLayer'] || [];
        }
        /**
         * Generate script tag and no script tag
         * @param gtmId String code
         */
        /**
         * Generate script tag and no script tag
         * @param {?} gtmId String code
         * @return {?}
         */
        SimpleGtmService.generate = /**
         * Generate script tag and no script tag
         * @param {?} gtmId String code
         * @return {?}
         */
            function (gtmId) {
                /** @type {?} */
                var scriptTagManager = document.createElement('script');
                /** @type {?} */
                var noScriptTagManager = document.createElement('noscript');
                /** @type {?} */
                var iframeTagManager = document.createElement('iframe');
                scriptTagManager.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','" + gtmId + "');";
                iframeTagManager.src = "https://www.googletagmanager.com/ns.html?id=" + gtmId;
                iframeTagManager.height = '0';
                iframeTagManager.width = '0';
                iframeTagManager.setAttribute('style', 'display:none;visibility:hidden');
                noScriptTagManager.appendChild(iframeTagManager);
                document.body.appendChild(noScriptTagManager);
                document.head.appendChild(scriptTagManager);
            };
        /**
         * Push values on dataLayer
         * @param event reveive a GTM event
         * @param params receive all params, this object is optional
         */
        /**
         * Push values on dataLayer
         * @param {?} event reveive a GTM event
         * @param {?=} params receive all params, this object is optional
         * @return {?}
         */
        SimpleGtmService.prototype.push = /**
         * Push values on dataLayer
         * @param {?} event reveive a GTM event
         * @param {?=} params receive all params, this object is optional
         * @return {?}
         */
            function (event, params) {
                /** @type {?} */
                var obj = {
                    'event': event
                };
                if (params !== undefined) {
                    Object.entries(params).forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        obj[key] = value;
                    }));
                }
                this.dataLayer.push(obj);
            };
        SimpleGtmService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SimpleGtmService.ctorParameters = function () { return []; };
        /** @nocollapse */ SimpleGtmService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleGtmService_Factory() { return new SimpleGtmService(); }, token: SimpleGtmService, providedIn: "root" });
        return SimpleGtmService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleGtmComponent = /** @class */ (function () {
        function SimpleGtmComponent() {
        }
        /**
         * @return {?}
         */
        SimpleGtmComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SimpleGtmComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-simple-gtm',
                        template: "\n    <p>\n      simple-gtm works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SimpleGtmComponent.ctorParameters = function () { return []; };
        return SimpleGtmComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleGtmModule = /** @class */ (function () {
        function SimpleGtmModule() {
        }
        SimpleGtmModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SimpleGtmComponent],
                        imports: [],
                        exports: [SimpleGtmComponent]
                    },] }
        ];
        return SimpleGtmModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SimpleGtmService = SimpleGtmService;
    exports.SimpleGtmComponent = SimpleGtmComponent;
    exports.SimpleGtmModule = SimpleGtmModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=simple-gtm.umd.js.map