import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  auth = inject(AuthService);
  //fetch and make card dynamic
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userPicture = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  userEmail = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
