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
     this.http.get<any>('https://run.mocky.io/v3/9c14e871-0764-41b7-9d13-dd373766076e').pipe(tap(data => this.opts = data))
  }
}
