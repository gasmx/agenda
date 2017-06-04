import { ProjetoFinalPage } from './app.po';

describe('projeto-final App', function() {
  let page: ProjetoFinalPage;

  beforeEach(() => {
    page = new ProjetoFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
