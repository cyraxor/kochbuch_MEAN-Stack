import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://ceres.traubing.local/projekte/kochbuch_0.8/API';
   }

   get(uri: string) {
     return this.http.get(`${this.ROOT_URL}/${uri}`);
   }

   post(uri: string, options: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, options);
  }

  patch(uri: string, options: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, options);
  }

  delete(uri: string, options: Object) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`, options);
  }
}
