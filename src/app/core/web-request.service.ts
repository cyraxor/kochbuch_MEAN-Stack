import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://deneb.traubing.local:3001';
    //this.ROOT_URL = 'https://ceres.traubing.local/projekte/kochbuch_0.8/API';
   }

   public getHeaders(): HttpHeaders {
    const token = localStorage.getItem('Bearer');
    const headers = new HttpHeaders({
      'Accept': 'application/json;odata=verbose',
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }


  get(uri: string) {
    const options = { headers: this.getHeaders() };
    return this.http.get(`${this.ROOT_URL}/${uri}`, options);
  }

   post(uri: string, options: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, options);
  }

  patch(uri: string, options: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, options);
  }

  delete(uri: string) {
    const options = {headers: this.getHeaders() };
    console.log(uri);
    return this.http.delete(`${this.ROOT_URL}/${uri}`, options);
  }
}
