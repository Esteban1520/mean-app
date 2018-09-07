import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/api/reports.service';
import * as jsPDF from 'jspdf';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emails: Array<String> = [];
  public tableData1: TableData;
  public tableData2: TableData;
  info: Array<String> = [];
  doc: jsPDF;

  constructor(private reportService: ReportsService) { 
    this.doc = new jsPDF();
  }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'User', 'Email Report', 'Action'],
      dataRows: []
    };
    var i = 1;
    var user = localStorage.getItem('actual');
    this.tableData1.dataRows = [];
    while(true) {
      var getId = user + '/' + 'reportes/' +  JSON.stringify(i);
      if(localStorage.getItem(getId) == null) break;
      var v = [];
      v.push(JSON.parse(localStorage.getItem(getId)).user);
      v.push(JSON.parse(localStorage.getItem(getId)).email);
      this.tableData1.dataRows.push(v);
      i++;
    }
  }

  searchEmail(email){
    event.preventDefault();
    this.reportService.getInfo(email)
    .subscribe(reports => {
      var x = 15; // Mueve texto de manera horizontal.
      var y = 15; // Mueve texto de manera vertical.
      var actual = localStorage.getItem('actual');
      this.doc.text('Reporte realizado por '+actual, x, y);
      this.doc.text('Emails: ', x+2, y+8);
      y = y + 15;
      Object.values(reports)[6].forEach(element => {
        this.doc.text(element.email_address, x+5, y);
        //console.log("Elementos: " + element.email_address);
        y = y + 8;
      });

      this.doc.text('Redes Sociales: ', x+2, y+8);
      y = y + 15;
      Object.values(reports)[11].forEach(element => {
        this.doc.text(element.type + ' / ' + element.url, x+5, y);
        //console.log("Elementos: " + element.type);
        y = y + 8;
      });

      this.doc.text('Nombres: ', x+2, y+8);
      y = y + 15;
      Object.values(reports)[2].forEach(element => {
        this.doc.text(element.full, x+5, y);
        //console.log("Elementos: " + element.full);
        y = y + 8;
      });

      this.doc.text('Trabajos: ', x+2, y+8);
      y = y + 15;
      Object.values(reports)[8].forEach(element => {
        this.doc.text(element.company + ' / ' + element.title, x+5, y);
        //console.log("Elementos: " + element.type);
        y = y + 8;
      });

      var user = localStorage.getItem('actual');
      if(localStorage.getItem('num') == null) {
        localStorage.setItem('num', JSON.stringify(1));
      }
      else{
        localStorage.setItem('num', JSON.parse(localStorage.getItem('num'))+1);
      }
      var id = user + '/' + 'reportes/' + localStorage.getItem('num');

      this.addRows(email, user, id);

      this.doc.save(id+'.pdf');

    });
  }

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem[1]); 
    this.searchEmail(selectedItem[1]);
  }

  addRows(email, user, id) {
    var info = {
      user,
      email
    }
    console.log('IDDDD: ' + id);
    localStorage.setItem(id, JSON.stringify(info));
    console.log(JSON.parse(localStorage.getItem(id)).email + '  \  ' + JSON.parse(localStorage.getItem(id)).user);
    console.log(localStorage.getItem(user+'/reportes/1'));

    var i = 1;
    this.tableData1.dataRows = [];
    while(true) {
      var getId = user + '/' + 'reportes/' +  JSON.stringify(i);
      if(localStorage.getItem(getId) == null) break;
      var v = [];
      console.log('RESULT USER: ' + JSON.parse(localStorage.getItem(getId)).user);
      v.push(JSON.parse(localStorage.getItem(getId)).user);
      console.log('RESULT EMAIL: ' + JSON.parse(localStorage.getItem(getId)).email);
      v.push(JSON.parse(localStorage.getItem(getId)).email);
      this.tableData1.dataRows.push(v);
      i++;
    }
  }

}

/*localStorage.removeItem('num');
      localStorage.removeItem('esteban@gmail.com/reportes/1');
      localStorage.removeItem('esteban@gmail.com/reportes/2');
      localStorage.removeItem('esteban@gmail.com/reportes/3');
      localStorage.removeItem('esteban@gmail.com/reportes/4');
      localStorage.removeItem('esteban@gmail.com/reportes/5');
      localStorage.removeItem('esteban@gmail.com/reportes/6');
      localStorage.removeItem('esteban@gmail.com/reportes/7');
      localStorage.removeItem('esteban@gmail.com/reportes/8');
      localStorage.removeItem('esteban@gmail.com/reportes/9');
      localStorage.removeItem('esteban@gmail.com/reportes/10');*/

    //Fin de PDF | Inicio de cargar los reportes de usuario.
      /*var user = localStorage.getItem('actual');
      if(localStorage.getItem('num') == null) {
        localStorage.setItem('num', JSON.stringify(1));
      }
      else{
        localStorage.setItem('num', JSON.parse(localStorage.getItem('num'))+1);
      }
      var id = user + '/' + 'reportes/' + localStorage.getItem('num');
      console.log('ID: ' + id);

      var info = {
        user,
        email
      }
      localStorage.setItem(id, JSON.stringify(info));
      console.log(JSON.parse(localStorage.getItem(id)).email + '  \  ' + JSON.parse(localStorage.getItem(id)).user);

      //console.log('Prueba: ' + localStorage.getItem(user+'/reportes/3'));
      

      var i = 1;
      this.tableData1.dataRows = [];
      while(true) {
        var getId = user + '/' + 'reportes/' +  JSON.stringify(i);
        if(localStorage.getItem(getId) == null) break;
        var v = [];
        console.log('RESULT USER: ' + JSON.parse(localStorage.getItem(getId)).user)
        v.push(JSON.parse(localStorage.getItem(getId)).user);
        console.log('RESULT EMAIL: ' + JSON.parse(localStorage.getItem(getId)).email)
        v.push(JSON.parse(localStorage.getItem(getId)).email);
        this.tableData1.dataRows.push(v);
        i++;
      } */