import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtitlityService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response: any) => response.map((item: any) => item.name)));
  }
}
