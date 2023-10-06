import { Component } from '@angular/core';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'employee-app-auth-login';
  constructor(private store: Store) {
    console.log(this.store.snapshot());
  }
}
