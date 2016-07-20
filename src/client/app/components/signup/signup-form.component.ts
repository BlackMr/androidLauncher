import {BaseComponent} from '../../frameworks/core/index';
import {Registrant} from './registrant';
import { NgForm }    from '@angular/forms';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import {Http} from '@angular/http';
@BaseComponent({
  moduleId: module.id,
  selector: 'signup-form',
  templateUrl: 'signup-form.component.html',
  styleUrls: ['signup-form.component.css'],
  directives: [FORM_DIRECTIVES]
})

export class SignupFormComponent {

  registrationForm: ControlGroup;
  firstName: Control;
  lastName: Control;
  email: Control;
  submitAttempt: boolean = false;

constructor(private http: Http, private builder: FormBuilder) {

    // Synchronous validators are passed in as the second
    // argument to our Controls
    this.firstName = new Control('', Validators.required)
    this.lastName = new Control('', Validators.required)
    // If we want to use more than one synchronous validators, we need to compose them
    this.email = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]))

    this.registrationForm = builder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
}

 registerUser(user:any):void {
    this.submitAttempt = true;
      console.log('User is '+ user.firstName +" "+ user.lastName +" "+user.email );
    console.log('Successful login');

  }
/*
  submitted = false;
  onSubmit() { this.submitted = true;
      console.log('YES YES YES'); }
*/  
}