import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  opts = [];
  constructor(private http: HttpClient) { }

  getData() {
    return this.opts.length ?
     of(this.opts):
     this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))
  }
}
