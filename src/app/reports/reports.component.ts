import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/api/reports.service';
import { User } from '../model/user';
import { element } from 'protractor';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  emails: Array<String> = [];

  constructor(private reportService: ReportsService) { 
    this.reportService.getTask()
      .subscribe(reports => {
        console.log(reports);
        console.log(Object.values(reports)[6][1].email_address);
        this.emails.push(Object.values(reports)[6][1].email_address);
        Object.values(reports)[6].forEach(element => {
          console.log("Elementos: " + element.email_address);
        });
        this.emails.forEach(element => {
          console.log(element);
        });
      });
  }

  ngOnInit() {
  }



}
