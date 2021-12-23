import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(    public _authService: AuthService,
    ) { }

  ngOnInit() {
  }

}
