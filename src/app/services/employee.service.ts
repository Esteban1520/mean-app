import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  seletectedEmployee: Employee;

  constructor(private http: HttpClient) { }
}
