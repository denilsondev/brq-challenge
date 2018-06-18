import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorHandler } from '../app.error-handler';
import { SAQUE_API } from '../../app.api';

@Injectable()
export class SaqueService {

  constructor(private http: Http) { }

  efetuarSaque(body): Observable<any> {
    return this.http.post(`${SAQUE_API}/v1/saque`, body)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
