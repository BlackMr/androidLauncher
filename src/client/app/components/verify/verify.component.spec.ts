import {TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';
import {disableDeprecatedForms, provideForms} from '@angular/forms/index';

import {t} from '../../frameworks/test/index';
import {TEST_CORE_PROVIDERS} from '../../frameworks/core/testing/index';
import {SupportComponent} from './support.component';

export function main() {
  t.describe('@Component: SupportComponent', () => {
    // Disable old forms
    let providerArr: any[];

    t.be(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });
    
    t.it('should work',
      t.inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((rootTC:any) => {
            let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

            t.e(getDOM().querySelectorAll(aboutDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  viewProviders: [
    TEST_CORE_PROVIDERS()
  ],
  selector: 'test-cmp',
  directives: [SupportComponent],
  template: '<sd-support></sd-support>'
})
class TestComponent {}
