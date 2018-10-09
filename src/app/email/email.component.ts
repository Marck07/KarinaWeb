import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFire, AuthProviders, AuthMethods } from 'firebase/firebase-auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/firebase';

import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
    // this.af.auth.onAuthStateChanged((user) => {
    //     if (user != null) {
    //       this.router.navigateByUrl('/members');
    //     } else {
    //         // User is not logged in, redirect to where you need to.
    //     }
    // });
    }
  //
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/members']);
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
