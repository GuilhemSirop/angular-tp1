import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ContactService {

  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

}
