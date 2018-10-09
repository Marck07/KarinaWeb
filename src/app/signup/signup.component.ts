import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFire, AuthProviders, AuthMethods } from 'firebase/firebase-auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/firebase';

import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent {
  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}
