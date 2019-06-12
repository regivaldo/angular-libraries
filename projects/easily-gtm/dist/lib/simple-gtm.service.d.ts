/**
 * Simple Google Tag Manager Service
 *
 * This service generate a script tag and
 * set trigger a custom events
 *
 * @example
 * import { EasilyGtmService } from 'easily-gtm';
 *
 * constructor(private egtm: EasilyGtmService) {}
 */
export declare class EasilyGtmService {
    private dataLayer;
    /**
     * @ignore
     */
    constructor();
    /**
     * Generate script tag and no script tag
     * @param gtmId String code
     */
    static generate(gtmId: string): void;
    /**
     * Push values on dataLayer
     * @param event reveive a GTM event
     * @param params receive all params, this object is optional
     */
    push(event: string, params?: object): void;
}
