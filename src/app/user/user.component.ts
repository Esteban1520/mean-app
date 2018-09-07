import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  university: string;

  constructor() { }

  ngOnInit() {
  }

  addUser(event) {
    console.log('Hello');
    event.preventDefault();
    console.log(this.university);
  }
  

}
