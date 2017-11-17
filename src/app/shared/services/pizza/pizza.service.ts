import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import * as io from 'socket.io-client';

import { Pizza } from '../../../models/pizza';

@Injectable()
export class PizzaService {

  private baseUrl = 'https://nodejs-api-coeurdelion.c9users.io';
  private socket = io.connect(this.baseUrl);

  private url: string;

  constructor(private http: HttpClient) {
    this.url = this.baseUrl + '/pizzas';
    console.log(this.socket);
  }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  create(pizza: Pizza): Observable<any> {
    return this.http.post(this.url, pizza);
  }

  update(id, pizza: Pizza): Observable<any> {
    return this.http.put(this.url + '/' + id, pizza);
  }

  deleteById(id): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  /* *** SOCKET *** */
  onAddPizza(pizza) {
    this.socket.emit('on-create-pizza', pizza);
  }

  listenOnAddContact() {
    console.log('ecoute...');
    let observable = new Observable(observer => {
        this.socket.on('update-list-pizzas', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );
    return observable;
  }

  listenOnToast() {
    console.log('ecoute TOAST...');
    let observable = new Observable(observer => {
        this.socket.on('toast', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );
    return observable;
  }

  /* *** FIN SOCKET *** */

}
