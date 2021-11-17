/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Tariff } from '../models/tariff';

/**
 * Tariff Controller
 */
@Injectable({
  providedIn: 'root',
})
class TariffControllerService extends __BaseService {
  static readonly saveUsingPOST5Path = '/api/tariff';
  static readonly updateUsingPUT5Path = '/api/tariff';
  static readonly getAllUsingGET5Path = '/api/tariff/all';
  static readonly getByIdUsingGET5Path = '/api/tariff/{id}';
  static readonly deleteUsingDELETE5Path = '/api/tariff/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Tariff
   * @param tariff tariff
   * @return OK
   */
  saveUsingPOST5Response(tariff: Tariff): __Observable<__StrictHttpResponse<Tariff>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = tariff;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/tariff`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tariff>;
      })
    );
  }
  /**
   * Save a Tariff
   * @param tariff tariff
   * @return OK
   */
  saveUsingPOST5(tariff: Tariff): __Observable<Tariff> {
    return this.saveUsingPOST5Response(tariff).pipe(
      __map(_r => _r.body as Tariff)
    );
  }

  /**
   * Update a Tariff
   * @param tariff tariff
   * @return OK
   */
  updateUsingPUT5Response(tariff: Tariff): __Observable<__StrictHttpResponse<Tariff>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = tariff;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/tariff`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tariff>;
      })
    );
  }
  /**
   * Update a Tariff
   * @param tariff tariff
   * @return OK
   */
  updateUsingPUT5(tariff: Tariff): __Observable<Tariff> {
    return this.updateUsingPUT5Response(tariff).pipe(
      __map(_r => _r.body as Tariff)
    );
  }

  /**
   * Get all tariffs
   * @return OK
   */
  getAllUsingGET5Response(): __Observable<__StrictHttpResponse<Array<Tariff>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/tariff/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Tariff>>;
      })
    );
  }
  /**
   * Get all tariffs
   * @return OK
   */
  getAllUsingGET5(): __Observable<Array<Tariff>> {
    return this.getAllUsingGET5Response().pipe(
      __map(_r => _r.body as Array<Tariff>)
    );
  }

  /**
   * Search a tariff with a ID
   * @param id The id of the tariff
   * @return OK
   */
  getByIdUsingGET5Response(id: number): __Observable<__StrictHttpResponse<Tariff>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/tariff/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tariff>;
      })
    );
  }
  /**
   * Search a tariff with a ID
   * @param id The id of the tariff
   * @return OK
   */
  getByIdUsingGET5(id: number): __Observable<Tariff> {
    return this.getByIdUsingGET5Response(id).pipe(
      __map(_r => _r.body as Tariff)
    );
  }

  /**
   * Delete a Tariff by ID
   * @param id The id of the tariff
   * @return OK
   */
  deleteUsingDELETE5Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/tariff/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Delete a Tariff by ID
   * @param id The id of the tariff
   * @return OK
   */
  deleteUsingDELETE5(id: number): __Observable<{}> {
    return this.deleteUsingDELETE5Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module TariffControllerService {
}

export { TariffControllerService }
