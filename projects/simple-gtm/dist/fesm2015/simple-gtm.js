import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
class SimpleGtmService {
    /**
     * @ignore
     */
    constructor() {
        this.dataLayer = window['dataLayer'] || [];
    }
    /**
     * Generate script tag and no script tag
     * @param {?} gtmId String code
     * @return {?}
     */
    static generate(gtmId) {
        /** @type {?} */
        const scriptTagManager = document.createElement('script');
        /** @type {?} */
        const noScriptTagManager = document.createElement('noscript');
        /** @type {?} */
        const iframeTagManager = document.createElement('iframe');
        scriptTagManager.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');`;
        iframeTagManager.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
        iframeTagManager.height = '0';
        iframeTagManager.width = '0';
        iframeTagManager.setAttribute('style', 'display:none;visibility:hidden');
        noScriptTagManager.appendChild(iframeTagManager);
        document.body.appendChild(noScriptTagManager);
        document.head.appendChild(scriptTagManager);
    }
    /**
     * Push values on dataLayer
     * @param {?} event reveive a GTM event
     * @param {?=} params receive all params, this object is optional
     * @return {?}
     */
    push(event, params) {
        /** @type {?} */
        const obj = {
            'event': event
        };
        if (params !== undefined) {
            Object.entries(params).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([key, value]) => {
                obj[key] = value;
            }));
        }
        this.dataLayer.push(obj);
    }
}
SimpleGtmService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SimpleGtmService.ctorParameters = () => [];
/** @nocollapse */ SimpleGtmService.ngInjectableDef = defineInjectable({ factory: function SimpleGtmService_Factory() { return new SimpleGtmService(); }, token: SimpleGtmService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleGtmComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SimpleGtmComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-simple-gtm',
                template: `
    <p>
      simple-gtm works!
    </p>
  `
            }] }
];
/** @nocollapse */
SimpleGtmComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleGtmModule {
}
SimpleGtmModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleGtmComponent],
                imports: [],
                exports: [SimpleGtmComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SimpleGtmService, SimpleGtmComponent, SimpleGtmModule };

//# sourceMappingURL=simple-gtm.js.map