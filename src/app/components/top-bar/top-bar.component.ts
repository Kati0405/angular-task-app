import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userEmail = this.getUserEmail()
  faRightToBracket = faRightToBracket
  faUser = faUser

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  getUserEmail() {
    return this.authService.getUserEmail()
  }

  onLogoutClick() {
    this.userEmail = ''
    this.authService.logout()
  }
}
