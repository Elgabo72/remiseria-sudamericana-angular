/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * Public Controller
 */
@Injectable({
  providedIn: 'root',
})
class PublicControllerService extends __BaseService {
  static readonly getClientsUsingGETPath = '/api/public/users/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get all Clients
   * @return OK
   */
  getClientsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/public/users/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * Get all Clients
   * @return OK
   */
  getClientsUsingGET(): __Observable<Array<User>> {
    return this.getClientsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }
}

module PublicControllerService {
}

export { PublicControllerService }
