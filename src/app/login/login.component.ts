import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '5015763941-6l7vkl7gcfn1kinqiu2h0jqmm6ht1tek.apps.googleusercontent.com',
      // callback: (res: any) => {
      //   console.log(res.credential);
      // },
      callback: (res: any) => this.handleLogin(res),
    });
    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      { theme: 'filled_blue', size: 'large', shape: 'pill', width: 200 } // customization attributes
    );
  }
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1])); //atob is window method for decode
  }
  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payload = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      //navigate to home or brows page
      //inject the router
      this.router.navigate(['browse']);
    }
  }
}
