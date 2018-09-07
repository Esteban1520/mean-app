import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accounts: Array<User> = [];
  

  constructor(private router: Router) { 
    localStorage.setItem('accounts', JSON.stringify(this.accounts));
  }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault();
    let mail = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    if(localStorage.getItem(mail) == null) {
      var info = {mail, password}
      localStorage.setItem(mail, JSON.stringify(info));
      alert('Usuario registrado correctamente!');
      this.router.navigate(['login']);
    }
    else {
      alert('ERROR! Ya existe una cuenta con este email!');
      this.router.navigate(['register']);
    }
  }

}
