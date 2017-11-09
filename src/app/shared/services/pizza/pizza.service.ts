import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Pizza} from '../../../models/pizza';

@Injectable()
export class PizzaService {

  private url: string = 'https://pizza-delaunay1-simsimz.c9users.io/pizzas';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  create(pizza: Pizza): Observable<any> {
    return this.http.post(this.url, pizza);
  }

}
