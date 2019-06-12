/**
 * Simple Google Tag Manager Service
 *
 * This service generate a script tag and
 * set trigger a custom events
 *
 * @example
 * import { SimpleGtmService } from 'simple-gtm';
 *
 * constructor(private sgtm: SimpleGtmService) {}
 */
export declare class SimpleGtmService {
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
