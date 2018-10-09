import { Component, OnInit, HostBinding  } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFire, AuthProviders, AuthMethods } from '@angular/fire/';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/firebase';

import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent{
  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.auth.onAuthStateChanged((user) => {
        if (user != null) {
          this.router.navigateByUrl('/members');
        } else {
            // User is not logged in, redirect to where you need to.
        }
    });
    // this.af.auth.subscribe(auth => {
    //   if(auth) {
    //     this.router.navigateByUrl('/members');
    //   }
    //   });
  }
  // Meth
  //
  loginFb() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }
  //
  // ngOnInit() {
  // }

}
