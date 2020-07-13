import { ProyectoModulo8Page } from './app.po';

describe('proyecto-modulo8 App', function() {
  let page: ProyectoModulo8Page;

  beforeEach(() => {
    page = new ProyectoModulo8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
