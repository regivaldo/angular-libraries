import { Component, OnInit } from '@angular/core';
import { EasilyGtmService } from 'projects/easily-gtm/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-libraries';

  /**
   * Constructor
   * @param egtm of EasilyGtmService
   */
  constructor(private egtm: EasilyGtmService) {}

  /**
   * Test of service
   */
  ngOnInit() {
    this.egtm.push('vpageview', {'page': '/teste'});
  }
}
