import { StormlightIpsumPage } from './app.po';

describe('stormlight-ipsum App', () => {
  let page: StormlightIpsumPage;

  beforeEach(() => {
    page = new StormlightIpsumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
