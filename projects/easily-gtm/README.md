# Simple Google Tag Manager
Simple GTM library for Angular 7+

[![Open issues](https://img.shields.io/github/issues-raw/regivaldo/angular-libraries.svg)](https://github.com/regivaldo/angular-libraries/issues)
![licence](https://img.shields.io/npm/l/angular-libraries.svg)
![version](https://img.shields.io/github/package-json/v/regivaldo/angular-libraries.svg)
[![angular](https://img.shields.io/github/package-json/dependency-version/regivaldo/angular-libraries/dev/@angular/cli.svg)](https://angular.io)

## Install
* Run `npm install easily-gtm --save-dev`
* Create a attribute on environment config:

```typescript
export const environment = {
  production: false,
  tagManagerId: 'GTM-XXXXXXX',
};
```

* Import on **main.js**:

```typescript
import { EasilyGtmService } from 'easily-gtm/easily-gtm.service';
```

* Implement function generate on `<header>` and `<body>`:
> This function create the script and no-script tags.

```typescript
EasilyGtmService.generate(environment.tagManagerId);
```

## Using
This library has one function only: **push**

* Import the library

```typescript
import { EasilyGtmService } from 'easily-gtm/easily-gtm.service';
```

* Include on components' constructor
```typescript
constructor(private egtm: EasilyGtmService) {}
```

* Use the method:

```typescript
this.egtm.push('vpageview', {'page': '/teste'});
```

The mothod has two params: **event**, **params**:

### Event
This attribute is a String and receive the event.

> Example: vpageview, ga-event, ga-exception

### Params
This attribute is a object with this format:

```json
{
  'page': 'value'
}
```

or

```json
{
  'category': 'your category',
  'action': 'your action',
  'label': 'your label'
}
```

or

```json
{
  'category': 'your category',
  'action': 'your action',
  'value': 'your value'
}
```

[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/0)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/0)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/1)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/1)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/2)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/2)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/3)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/3)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/4)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/4)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/5)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/5)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/6)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/6)[![](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/images/7)](https://sourcerer.io/fame/regivaldo/regivaldo/angular-libraries/links/7)
