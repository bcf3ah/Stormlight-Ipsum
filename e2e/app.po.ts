import { browser, by, element } from 'protractor';

export class StormlightIpsumPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
