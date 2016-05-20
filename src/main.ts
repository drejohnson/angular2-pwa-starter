import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppMobileAppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppMobileAppComponent, [ APP_SHELL_RUNTIME_PROVIDERS ]);

