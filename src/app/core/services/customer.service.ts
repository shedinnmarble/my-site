import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'https://api.deweixiang.com/';
  constructor(
    private http: HttpClient
  ) { }
  getHomeSiteInfo() {
    return this.http.get(this.baseUrl,
      {
        responseType: 'json', headers: new HttpHeaders({
        
        })
      }).pipe(
        map(data => {
          return data['body'];
        })
      )
  }
}
