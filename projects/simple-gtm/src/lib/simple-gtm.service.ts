import { Injectable } from '@angular/core';

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
@Injectable({
  providedIn: 'root'
})
export class SimpleGtmService {

  constructor() { }

  /**
   * Generate script tag and no script tag
   * @param gtmId String code
   */
  generate(gtmId: string) {
    console.log('Google Tag Manager ID', gtmId);

    const scriptTagManager = document.createElement('script');
    const noScriptTagManager = document.createElement('noscript');
    const iframeTagManager = document.createElement('iframe');

    iframeTagManager.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframeTagManager.height = '0';
    iframeTagManager.width = '0';
    iframeTagManager.setAttribute('style', 'display:none;visibility:hidden');

    noScriptTagManager.appendChild(iframeTagManager);

    scriptTagManager.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;

    document.body.appendChild(noScriptTagManager);
    document.head.appendChild(scriptTagManager);
  }
}
