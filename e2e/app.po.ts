import { browser, element, by } from 'protractor';

export class ECommercePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yo-root h1')).getText();
  }
}
