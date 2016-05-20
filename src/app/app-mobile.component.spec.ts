import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppMobileAppComponent } from '../app/app-mobile.component';

beforeEachProviders(() => [AppMobileAppComponent]);

describe('App: AppMobile', () => {
  it('should create the app',
      inject([AppMobileAppComponent], (app: AppMobileAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app-mobile works!\'',
      inject([AppMobileAppComponent], (app: AppMobileAppComponent) => {
    expect(app.title).toEqual('app-mobile works!');
  }));
});
