import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import * as io from 'socket.io-client';

import {Pizza} from '../../../models/pizza';

@Injectable()
export class PizzaService {

  private url: string = 'https://pizza-delaunay1-simsimz.c9users.io/pizzas';
  private socket = io.connect(this.url);

  constructor(private http: HttpClient) {
  }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  create(pizza: Pizza): Observable<any> {
    this.onAddContact(pizza);
    return this.http.post(this.url, pizza);
  }

  update(id, pizza: Pizza): Observable<any> {
    return this.http.put(this.url + '/' + id, pizza);
  }

  deleteById(id): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  /* *** SOCKET *** */
  onAddContact(contact) {
    console.log('socket ok');
    this.socket.emit('on-create-pizza', contact);
  }

  listenOnAddContact() {

    const observable = new Observable(observer => {
      console.log('Tentative !');
        this.socket.on('update-list-pizzas', (data) => {
          console.log('yeah !');
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
