import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataItemService {

  constructor(private httpClient: HttpClient) { }

  getItemList(): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos`).pipe(
      map((data: Array<any>) => {
        return data.map((d) => {
          d.name = d.title.split(' ')[0];
          return d;
        })
      })
    );
  }

  createItemList() {

  }

  deleteItem() {

  }

}
