import { Ng2YoutubeComponentPage } from './app.po';

describe('ng2-youtube-component App', function() {
  let page: Ng2YoutubeComponentPage;

  beforeEach(() => {
    page = new Ng2YoutubeComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
