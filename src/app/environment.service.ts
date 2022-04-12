import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private baseURL = "http://localhost:8080/api/v1/compare"

  constructor(private httpClient: HttpClient) { }

  getEnvironmentService(): Observable<Environment[]>{
    return this.httpClient.get<Environment[]>(`${this.baseURL}`);
  }

  deleteCompare(path: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/path${path}`);
  }

}
