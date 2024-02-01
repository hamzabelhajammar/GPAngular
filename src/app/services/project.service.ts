import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Project} from "../models/Project";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
//GET http://localhost:8075/getProjectByChef/{{id}}
  private baseUrl = 'http://localhost:8075/project';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}`);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/showproject/${id}`);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.baseUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8075/${id}`);
  }
  listProjectsByChef(id: number): Observable<Project[]> {
    return this.http.get<Project[]>(`http://localhost:8075/getProjectByChef/${id}`);
  }
  createProject(project: Project, id: number): Observable<Project> {
    const url = `${this.baseUrl}/createproject/${id}`;
    return this.http.post<Project>(url, project);
  }
}


