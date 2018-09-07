import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  api: string = 'https://www.beenverified.com/hk/dd/email?email';
  //skip.suva@gmail.com calebvillalta@gmail.com

  constructor(private http: HttpClient) { }

  getTask(){
    return this.http.get<any[]>(`${this.api}`)
      .map(res => res);
  }

  getInfo(email) {
    return this.http.get<any[]>(`${this.api}=${email}`)
      .map(res => res);
  }

}
