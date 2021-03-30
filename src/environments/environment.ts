/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'https://salils14.sg-host.com/wp-json/we-seated/v2/',
  mediaURL: 'https://salils14.sg-host.com/uploads/',
  absUrl: 'https://salils14.sg-host.com',
  general: {
    symbol: '$',
    code: 'USD',
  },
  wookey: {
    key: 'ck_6050351791918d51329f52fd605c85c36e755048',
    secret: 'cs_81adce871197bfd52accd57c61f11d57512689e4',
  },
  authToken: '123456789',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
