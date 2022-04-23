import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Json } from './json';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  //json: Json;

  private baseURL = "http://localhost:8080/api/v1/jsons"
  private mergeURL = "http://localhost:8080/api/v1/merged"

  constructor(private httpClient: HttpClient) { }

  getJsonService(): Observable<string>{
    return this.httpClient.get<string>(`${this.baseURL}`);
  }

  getMergedService(): Observable<string>{
    return this.httpClient.get<string>(`${this.mergeURL}`);
  }
}
