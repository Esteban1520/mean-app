import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from '../Task';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTask(){
      return this.http.get<Task[]>(`${this.url}/api/tasks`)
        .map(res => res);
  }

  addTask(newTask) {
    return this.http.post<Task>(`${this.url}/api/tasks`, newTask)
      .map(res => res);
  }

  deleteTask(id) {
    return this.http.delete<Task>(`${this.url}/api/tasks/${id}`)
      .map(res => res);
  }

  updateTask(newTask: Task) {
    return this.http.put(`${this.url}/api/tasks/${newTask._id}`, newTask)
      .map(res => res);
  }

}
