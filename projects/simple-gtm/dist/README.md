# Simple Google Tag Manager
Simple GTM library for Angular 7+

[![Open issues](https://img.shields.io/github/issues-raw/regivaldo/angular-libraries.svg)](https://github.com/regivaldo/angular-libraries/issues)
![licence](https://img.shields.io/npm/l/angular-libraries.svg)
![version](https://img.shields.io/github/package-json/v/regivaldo/angular-libraries.svg)
[![angular](https://img.shields.io/github/package-json/dependency-version/regivaldo/angular-libraries/dev/@angular/cli.svg)](https://angular.io)

## Using
1. Run `npm install simple-gtm --save-dev`
1. Create a attribute on environment config:
```typescript
export const environment = {
  production: false,
  tagManagerId: 'GTM-XXXXXXX',
};
```
3. Import on main.js: 
```typescript
import { SimpleGtmService } from 'simple-gtm/simple-gtm.service';
```
4. Implement function create script on `<header>` and `<body>`:
```typescript
SimpleGtmService.generate(environment.tagManagerId);
```
