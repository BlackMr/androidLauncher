import {BaseComponent} from '../../frameworks/core/index';
import {Registrant} from './registrant';
import { NgForm }    from '@angular/forms';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import {ROUTER_DIRECTIVES } from '@angular/router';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
@BaseComponent({
  moduleId: module.id,
  selector: 'signup-form',
  templateUrl: 'signup-form.component.html',
  styleUrls: ['signup-form.component.css'],
  directives: [FORM_DIRECTIVES,ROUTER_DIRECTIVES]
})

export class SignupFormComponent {
  router:Router;
  registrationForm: ControlGroup;
  firstName: Control;
  lastName: Control;
  email: Control;
  submitAttempt: boolean = false;

constructor(private http: Http, private builder: FormBuilder, private _router: Router) {
    this.router = _router;
    // Synchronous validators are passed in as the second
    // argument to our Controls
    this.firstName = new Control('', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(30)]));
    this.lastName = new Control('', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(30)]));
    // If we want to use more than one synchronous validators, we need to compose them
    this.email = new Control('', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(30)]));
    this.registrationForm = builder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
}

setStyles(element:Control) {
  let styles = {
    // CSS property names
    'border-color': element.valid ? 'green' : element.pristine ? 'blue' : 'red'
  };
  return styles;
}

 registerUser(user:any):void {
     
    this.submitAttempt = true;
    if (this.registrationForm.valid) {
      console.log('User is '+ user.firstName +" "+ user.lastName +" "+user.email );
    console.log('Successful login');
    this._router.navigate(['/verify']);
     }
     }
    //console.log(user.fitrstName.Validators.compose);
/*
  submitted = false;
  onSubmit() { this.submitted = true;
      console.log('YES YES YES'); }
*/  
}