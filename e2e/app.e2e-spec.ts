import { Angular2UiComponentPage } from './app.po';

describe('angular2-ui-component App', function() {
  let page: Angular2UiComponentPage;

  beforeEach(() => {
    page = new Angular2UiComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
