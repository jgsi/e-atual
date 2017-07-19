import { EAtualPage } from './app.po';

describe('e-atual App', () => {
  let page: EAtualPage;

  beforeEach(() => {
    page = new EAtualPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
