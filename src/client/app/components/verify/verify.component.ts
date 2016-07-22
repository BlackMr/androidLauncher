import {BaseComponent} from '../../frameworks/core/index';
import {ROUTER_DIRECTIVES } from '@angular/router';
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-verify',
  templateUrl: 'verify.component.html',
  styleUrls: ['verify.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class VerifyComponent  {
  
}
