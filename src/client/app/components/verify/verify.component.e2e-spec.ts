import {t} from '../../frameworks/test/index';

declare var browser: any, element: any, by: any;

t.describe('Verify', function() {

  t.be(function () {
    browser.get('/verify');
  });

  t.it('should have correct feature heading', function() {
    let el = element(by.css('sd-verify h2'));
    t.e(el.getText()).toEqual('Features');
  });
});
