import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/api/reports.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emails: Array<String> = [];

  constructor(private router: Router, private reportService: ReportsService) { 
    /*this.reportService.getTask()
      .subscribe(reports => {
        console.log(reports);
        Object.values(reports)[6].forEach(element => {
          this.emails.push(element.email_address);
        });
        this.emails.forEach(element => {
          console.log(element);
        });
      });*/
      // Realizar en los demas componentes, actual esta vacio entonces devolver a login.
  }

  ngOnInit() {
  }

  logIn(event) {
    event.preventDefault();
    let mail = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    console.log('Result: ' + localStorage.getItem(mail));
    if(localStorage.getItem(mail) == null){
      alert('Esta cuenta de email no se ha registrado.');
    }
    else if(JSON.parse(localStorage.getItem(mail)).password == password) {
      localStorage.setItem('actual', mail);
      this.router.navigate(['dashboard']);
    }
    else if(JSON.parse(localStorage.getItem(mail)).password != password){
      alert('El password ingresado es incorrecto.');
    }
  }

}
