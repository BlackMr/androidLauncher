import {t} from '../../frameworks/test/index';

declare var browser: any, element: any, by: any;

t.describe('Support', function() {

  t.be(function () {
    browser.get('/support');
  });

  t.it('should have correct feature heading', function() {
    let el = element(by.css('sd-support h2'));
    t.e(el.getText()).toEqual('Features');
  });
});
