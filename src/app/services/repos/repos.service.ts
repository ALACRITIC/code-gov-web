import {
  Http,
  Headers,
  RequestOptions,
  RequestOptionsArgs,
  Response
} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ReposService {
  constructor(private http: Http) {}

  getJsonFile(): Observable<Response> {
    return this.http.get(
      'http://localhost:3001/api/0.1/repos?size=2800'
    )
    .map(response => response.json());
  }
}
