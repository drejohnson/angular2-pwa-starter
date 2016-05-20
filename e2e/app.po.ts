export class AppMobilePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-mobile-app h1')).getText();
  }
}
