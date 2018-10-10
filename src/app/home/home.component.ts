import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginComponent } from '../login/login.component';

import { moveIn } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  goToLogin () {
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
