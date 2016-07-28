import {provideRouter, RouterConfig} from '@angular/router';

import {AboutRoutes} from '../about/about.routes';
import {HomeRoutes} from '../home/home.routes';
import {SupportRoutes} from '../support/support.routes';
import {SignupRoutes} from '../signup/signup.routes';
import {VerifyRoutes} from '../verify/verify.routes';

export const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...SupportRoutes,
  ...SignupRoutes,
  ...VerifyRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
