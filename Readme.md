
# Angular Breadcrumbs Light

[![GitHub version](https://img.shields.io/badge/version-1.1.4-yellow.svg)](https://github.com/mopcweb/angular-breadcrumbs-light/releases) [![npm version](https://img.shields.io/npm/v/angular-breadcrumbs-light.svg)](https://www.npmjs.com/package/angular-breadcrumbs-light) [![GitHub demo](https://img.shields.io/badge/demo-available-green.svg)](https://mopcweb.github.io/angular-breadcrumbs-light) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mopcweb/angular-breadcrumbs-light/blob/master/LICENSE)

## Demo

[See demo here](https://mopcweb.github.io/angular-breadcrumbs-light)

## Description

Easy to use breadcrumbs for Angular.

The package includes:

 - Service: just call it in some root component and it will be returning current breadcrumbs array
 - Breadcrumbs component: just import and use it. Could be manually configured and styled
 - TS Types for both

## Installation

```bash

npm i angular-breadcrumbs-light

```

## Breadcrumbs service

Provides function getBreadcrumbs, which returns an array of breadcrumbs.

Example ([Argument Routes is specified in next subsection](#routes)):

```js

// Usage
const crumbs = getBreadcrumbs(Routes, window.location.pathname);

// Returned array
[
  { link: '/', title: 'Home', icon: 'person', iconClass: 'material-icons' },
  { link: '/clients', title: 'Clients', icon: '...' },
  { link: '/clients/1', title: 'Client № - 1, welcome!', icon: '...' }
]

```

There is only __1 required__ arguments and 5 optional:

| Title         | Type     | Description                                | Default              |
| :-----:       | :------: | :----------------------------------------: | :------------------: |
| __routes *__  | _array_  | array of route objects ([see example below](#routes)) | -         |
| fullUrl       | _string_ | current location full path     | ([see example below](#fullurl))  |
| base          | _string_ | if project's base-href is provided manually, put it here also | - |
| notFoundTitle | _string_ | title for not found route                  | 'Page Not Found'     |
| notFoundIcon  | _string_ | icon for not found route                   | undefined            |
| notFoundClass | _string_ | icon class for not found route             | undefined            |

### Routes

Example:

  ```js

  const Routes = [
    { title: 'Home', link: '/', icon: 'string', iconClass: 'material-icons' },
    { title: 'Clients', link: '/clients', icon: '...', children: [
      { title: 'Client № - ', suffix: ', welcome!', link: '/clients/:id', icon: '...' },
      { title: 'Settings', link: '/clients/settings', icon: '...' }
    ] }
  ];

  ```

__Fields:__

| Title       | Type     | Description                                                       |
| :---------: | :------: | :---------------------------------------------------------------: |
| __link *__  | _string_ | breadcrumb link                                                   |
| title       | _string_ | breadcrumb title                                                  |
| suffix      | _string_ | breadcrumb suffix (added at the end of output breadcrumb title)   |
| icon        | _string_    | breadcrumb icon                                                |
| iconClass   | _string_    | breadcrumb icon class                                          |
| children    | _array_  | array of objects, similar to Routes, for nested routes            |

__Features__:

 - If __title__ is not provided, link will be used as breadcrumb title (First letter uppercased)
 - For root route ('' or '/') if __title__ not provided, the crumb title will be 'Root' by default
 - __link__ field may contain dynamic routes (ex.: '/route/:id')
 - For dynamic routes 'title' field will be used as prefix for current pathname (first letter uppercased), if provided

### FullUrl

  It should be a current location.  __DEFAULT VALUE IS:  window.location.pathname__.

### Important

Example ([Play with example here](https://stackblitz.com/edit/angular-breadcrumbs-light-custom-crumbs?embed=1&file=src/app/app.component.ts):

```js

```

## Breadcrumbs component

Provides a ready to use component. Can be styled and configured.

[Play with example here](https://stackblitz.com/edit/angular-breadcrumbs-light?embed=1&file=src/app/app.component.ts).

```html

<angular-breadcrumbs-light [routes]="routes"></angular-breadcrumbs-light>

```

There is only 1 __required__ argument. And bunch of optional:

| Title             | Type      | Description                                          | Default    |
| :---------------: | :-------: | :-----------------------------------------------:    | :--------: |
| __routes *__      | _array_   | array of route objects ([see example above](#routes))| -          |
| base              | _string_  | if project's base-href is provided manually, put it here also | - |
| separator         | _string_  | separator for crumbs                                 | /          |
| separatorClass    | _string_  | separator class for crumbs                           | -          |
| icons             | _boolean_ | whether to show icons                                | true       |
| titles            | _boolean_ | whether to show titles                               | true       |
| noTitlesOnMobile  | _boolean_ | if _true_ - hide titles when device width <= 600px (do not forget to provide icons in such case)| false |
| notFoundTitle     | _string_  | title for not found pages                      | 'Page Not Found' |
| notFoundIcon      | _string_  | icon for not found pages                             | -          |
| notFoundIconClass | _string_  | icon class for not found pages                       | -          |
| customClasses     | _object_  | [classes](#customclasses) for each element of Breadcrumbs component | - |

Similar to first required argument for Breadcrumbs service - __Routes__ array.

#### customClasses

| Title       | Type    | Description                   | Html Element              |
| ----------- | ------- | ----------------------------- | ------------------------- |
| root        | string  | class for root element        | nav 	                    |
| list        | string  | class for list element        | ul 		                |
| link        | string  | class for link element        | a 	                    |
| currentLink | string  | class for currentLink element | li   	                    |
| icon        | string  | class for icon element        | span (holder for icon)    |
| title       | string  | class for title element       | span 	                    |
| separator   | string  | class for separator element   | li (holder for separator) |

## License

This project is licensed under the terms of the [MIT license](https://github.com/mopcweb/angular-breadcrumbs-light/blob/master/LICENSE).
