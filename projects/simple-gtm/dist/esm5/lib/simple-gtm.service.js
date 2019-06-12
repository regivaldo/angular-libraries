/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
            Object.entries(params).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
                obj[key] = value;
            }));
        }
        this.dataLayer.push(obj);
    };
    SimpleGtmService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SimpleGtmService.ctorParameters = function () { return []; };
    /** @nocollapse */ SimpleGtmService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleGtmService_Factory() { return new SimpleGtmService(); }, token: SimpleGtmService, providedIn: "root" });
    return SimpleGtmService;
}());
export { SimpleGtmService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleGtmService.prototype.dataLayer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWd0bS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2ltcGxlLWd0bS8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtZ3RtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYTNDO0lBT0U7O09BRUc7SUFDSDtRQUxRLGNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBSzlCLENBQUM7SUFFakI7OztPQUdHOzs7Ozs7SUFDSSx5QkFBUTs7Ozs7SUFBZixVQUFnQixLQUFhOztZQUNyQixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7WUFDbkQsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7O1lBQ3ZELGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXpELGdCQUFnQixDQUFDLFNBQVMsR0FBRyx3V0FJZ0IsS0FBSyxRQUFLLENBQUM7UUFFeEQsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLGlEQUErQyxLQUFPLENBQUM7UUFDOUUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM5QixnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzdCLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUV6RSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCwrQkFBSTs7Ozs7O0lBQUosVUFBSyxLQUFhLEVBQUUsTUFBZTs7WUFDM0IsR0FBRyxHQUFHO1lBQ1YsT0FBTyxFQUFFLEtBQUs7U0FDZjtRQUVELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEVBQVk7b0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztnQkFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzJCQWZEO0NBb0VDLEFBdkRELElBdURDO1NBcERZLGdCQUFnQjs7Ozs7O0lBRTNCLHFDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBTaW1wbGUgR29vZ2xlIFRhZyBNYW5hZ2VyIFNlcnZpY2VcbiAqXG4gKiBUaGlzIHNlcnZpY2UgZ2VuZXJhdGUgYSBzY3JpcHQgdGFnIGFuZFxuICogc2V0IHRyaWdnZXIgYSBjdXN0b20gZXZlbnRzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IFNpbXBsZUd0bVNlcnZpY2UgfSBmcm9tICdzaW1wbGUtZ3RtJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNndG06IFNpbXBsZUd0bVNlcnZpY2UpIHt9XG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUd0bVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGF0YUxheWVyID0gd2luZG93WydkYXRhTGF5ZXInXSB8fCBbXTtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgc2NyaXB0IHRhZyBhbmQgbm8gc2NyaXB0IHRhZ1xuICAgKiBAcGFyYW0gZ3RtSWQgU3RyaW5nIGNvZGVcbiAgICovXG4gIHN0YXRpYyBnZW5lcmF0ZShndG1JZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2NyaXB0VGFnTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGNvbnN0IG5vU2NyaXB0VGFnTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25vc2NyaXB0Jyk7XG4gICAgY29uc3QgaWZyYW1lVGFnTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgc2NyaXB0VGFnTWFuYWdlci5pbm5lckhUTUwgPSBgKGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxuICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XG4gICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XG4gICAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsJyR7Z3RtSWR9Jyk7YDtcblxuICAgIGlmcmFtZVRhZ01hbmFnZXIuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9JHtndG1JZH1gO1xuICAgIGlmcmFtZVRhZ01hbmFnZXIuaGVpZ2h0ID0gJzAnO1xuICAgIGlmcmFtZVRhZ01hbmFnZXIud2lkdGggPSAnMCc7XG4gICAgaWZyYW1lVGFnTWFuYWdlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlbicpO1xuXG4gICAgbm9TY3JpcHRUYWdNYW5hZ2VyLmFwcGVuZENoaWxkKGlmcmFtZVRhZ01hbmFnZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9TY3JpcHRUYWdNYW5hZ2VyKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZ01hbmFnZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggdmFsdWVzIG9uIGRhdGFMYXllclxuICAgKiBAcGFyYW0gZXZlbnQgcmV2ZWl2ZSBhIEdUTSBldmVudFxuICAgKiBAcGFyYW0gcGFyYW1zIHJlY2VpdmUgYWxsIHBhcmFtcywgdGhpcyBvYmplY3QgaXMgb3B0aW9uYWxcbiAgICovXG4gIHB1c2goZXZlbnQ6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgJ2V2ZW50JzogZXZlbnRcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhTGF5ZXIucHVzaChvYmopO1xuICB9XG59XG4iXX0=