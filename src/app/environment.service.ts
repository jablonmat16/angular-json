import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private baseURL = "http://localhost:8080/api/v1/compare"
  private testURL = "http://localhost:8080/api/v1/test"

  constructor(private httpClient: HttpClient) { }

  getEnvironmentService(): Observable<Environment[]>{
    return this.httpClient.get<Environment[]>(`${this.baseURL}`);
  }

  updateEnvironmentService(environment: Environment[]): Observable<Environment[]> {
    return this.httpClient.post<Environment[]>(`${this.baseURL}`, environment);
  }

}
