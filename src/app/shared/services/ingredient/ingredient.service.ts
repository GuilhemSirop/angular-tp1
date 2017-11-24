import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import * as io from 'socket.io-client';

import {Ingredient} from '../../../models/ingredient';

@Injectable()
export class IngredientService {

  private url: string = 'https://nodejs-api-cloned-coeurdelion.c9users.io/ingredients';
  private socket = io.connect(this.url);

  constructor(private http: HttpClient) {
  }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  create(ingredient: Ingredient): Observable<any> {
    return this.http.post(this.url, ingredient);
  }

  update(id, ingredient: Ingredient): Observable<any> {
    return this.http.put(this.url + '/' + id, ingredient);
  }

  deleteById(id): Observable<any> {
    // AVANT on supprimer mais cela n'est pas l'idéal puisque sinon on devrait supprimer pour chaque pizza qui possède cet ingredient, l'ingrédient
    return this.http.delete(this.url + '/' + id);
  }


}
