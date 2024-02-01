import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8075/project'; // Replace with your API URL

  constructor(private http: HttpClient) {}


  getProjectTasks(id: number): Observable<any> {
    const url = `${this.baseUrl}/getProjectTasks/${id}`;
    return this.http.get(url);
  }
}
