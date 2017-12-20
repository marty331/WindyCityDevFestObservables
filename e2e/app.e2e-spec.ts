import { WindyCityPage } from './app.po';

describe('windy-city App', () => {
  let page: WindyCityPage;

  beforeEach(() => {
    page = new WindyCityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
