/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Simple Google Tag Manager Service
 *
 * This service generate a script tag and
 * set trigger a custom events
 *
 * \@example
 * import { EasilyGtmService } from 'easily-gtm';
 *
 * constructor(private egtm: EasilyGtmService) {}
 */
export class EasilyGtmService {
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
EasilyGtmService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EasilyGtmService.ctorParameters = () => [];
/** @nocollapse */ EasilyGtmService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleGtmService_Factory() { return new EasilyGtmService(); }, token: EasilyGtmService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EasilyGtmService.prototype.dataLayer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWd0bS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2ltcGxlLWd0bS8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtZ3RtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFnQjNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFPM0I7UUFMUSxjQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUs5QixDQUFDOzs7Ozs7SUFNakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFhOztjQUNyQixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Y0FDbkQsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7O2NBQ3ZELGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXpELGdCQUFnQixDQUFDLFNBQVMsR0FBRzs7OztpREFJZ0IsS0FBSyxLQUFLLENBQUM7UUFFeEQsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLCtDQUErQyxLQUFLLEVBQUUsQ0FBQztRQUM5RSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzlCLGdCQUFnQixDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDN0IsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRXpFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7O0lBT0QsSUFBSSxDQUFDLEtBQWEsRUFBRSxNQUFlOztjQUMzQixHQUFHLEdBQUc7WUFDVixPQUFPLEVBQUUsS0FBSztTQUNmO1FBRUQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBdERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUdDLHFDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBTaW1wbGUgR29vZ2xlIFRhZyBNYW5hZ2VyIFNlcnZpY2VcbiAqXG4gKiBUaGlzIHNlcnZpY2UgZ2VuZXJhdGUgYSBzY3JpcHQgdGFnIGFuZFxuICogc2V0IHRyaWdnZXIgYSBjdXN0b20gZXZlbnRzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IFNpbXBsZUd0bVNlcnZpY2UgfSBmcm9tICdzaW1wbGUtZ3RtJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNndG06IFNpbXBsZUd0bVNlcnZpY2UpIHt9XG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUd0bVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGF0YUxheWVyID0gd2luZG93WydkYXRhTGF5ZXInXSB8fCBbXTtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgc2NyaXB0IHRhZyBhbmQgbm8gc2NyaXB0IHRhZ1xuICAgKiBAcGFyYW0gZ3RtSWQgU3RyaW5nIGNvZGVcbiAgICovXG4gIHN0YXRpYyBnZW5lcmF0ZShndG1JZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2NyaXB0VGFnTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGNvbnN0IG5vU2NyaXB0VGFnTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25vc2NyaXB0Jyk7XG4gICAgY29uc3QgaWZyYW1lVGFnTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgc2NyaXB0VGFnTWFuYWdlci5pbm5lckhUTUwgPSBgKGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxuICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XG4gICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XG4gICAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsJyR7Z3RtSWR9Jyk7YDtcblxuICAgIGlmcmFtZVRhZ01hbmFnZXIuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9JHtndG1JZH1gO1xuICAgIGlmcmFtZVRhZ01hbmFnZXIuaGVpZ2h0ID0gJzAnO1xuICAgIGlmcmFtZVRhZ01hbmFnZXIud2lkdGggPSAnMCc7XG4gICAgaWZyYW1lVGFnTWFuYWdlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlbicpO1xuXG4gICAgbm9TY3JpcHRUYWdNYW5hZ2VyLmFwcGVuZENoaWxkKGlmcmFtZVRhZ01hbmFnZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9TY3JpcHRUYWdNYW5hZ2VyKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZ01hbmFnZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggdmFsdWVzIG9uIGRhdGFMYXllclxuICAgKiBAcGFyYW0gZXZlbnQgcmV2ZWl2ZSBhIEdUTSBldmVudFxuICAgKiBAcGFyYW0gcGFyYW1zIHJlY2VpdmUgYWxsIHBhcmFtcywgdGhpcyBvYmplY3QgaXMgb3B0aW9uYWxcbiAgICovXG4gIHB1c2goZXZlbnQ6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgJ2V2ZW50JzogZXZlbnRcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhwYXJhbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhTGF5ZXIucHVzaChvYmopO1xuICB9XG59XG4iXX0=
