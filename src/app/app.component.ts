import { Component, OnInit } from '@angular/core';
import { SimpleGtmService } from 'projects/simple-gtm/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-libraries';

  /**
   * Constructor
   * @param sgtm of SimpleGtmService
   */
  constructor(private sgtm: SimpleGtmService) {}

  /**
   * Test of service
   */
  ngOnInit() {
    this.sgtm.push('vpageview', {'page': '/teste'});
  }
}
