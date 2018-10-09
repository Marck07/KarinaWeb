// import { CanActivate, Router } from '@angular/router';
// import { AngularFireAuth } from "firebase/auth";
// import { Injectable } from "@angular/core";
// import { Observable } from "@rxjs/Rx";
// import { map, take } from 'rxjs/operators';
// import {  of, Subject } from 'rxjs';
// // import 'rxjs/add/observable/from';
// // // import 'rxjs/add/operator/do';
// // // import 'rxjs/add/operator/map';
// // // import 'rxjs/add/operator/take';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//
//     constructor(private auth: AngularFireAuth, private router: Router) {}
//
//     canActivate(): Observable<boolean> {
//       return Observable.from(this.auth)
//         .take(1)
//         .map(state => !!state)
//         .do(authenticated => {
//       if
//         (!authenticated) this.router.navigate([ '/login' ]);
//       })
//     }
//
// }
