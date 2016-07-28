import {BaseComponent} from '../../frameworks/core/index';
/* import {Registrant} from './registrant'; */
import {SignupFormComponent} from '../signup/signup-form/signup-form.component';
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives:[SignupFormComponent],
})
export class SignupComponent  {
  /*
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';  
    signup(): boolean {
    let firstNameOfRegistrant = this.firstName;
    let lastNameOfRegistrant = this.lastName;
    let emailOfRegistrant = this.email;
    if (firstNameOfRegistrant) {
      console.log(firstNameOfRegistrant);
      console.log('running signup');
      let myRegistrant =  new Registrant('kaan', 'SkyDog','Fetch any object at any distance');
      console.log('My hero is called ' + myRegistrant.firstName); // "My hero is called SkyDog"
      return true;
    } else {
      console.log('not running');
      return true;
    }
  }
*/

}



