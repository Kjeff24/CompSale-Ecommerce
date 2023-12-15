import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  activeTab: string = 'login'; // Default to 'login'

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
