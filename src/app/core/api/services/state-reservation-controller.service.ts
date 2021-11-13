/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StateReservation } from '../models/state-reservation';

/**
 * State Reservation Controller
 */
@Injectable({
  providedIn: 'root',
})
class StateReservationControllerService extends __BaseService {
  static readonly saveUsingPOST4Path = '/api/stateReservation';
  static readonly updateUsingPUT4Path = '/api/stateReservation';
  static readonly getAllUsingGET4Path = '/api/stateReservation/all';
  static readonly getByIdUsingGET4Path = '/api/stateReservation/{id}';
  static readonly deleteUsingDELETE4Path = '/api/stateReservation/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a stateReservation
   * @param stateReservation stateReservation
   * @return OK
   */
  saveUsingPOST4Response(stateReservation: StateReservation): __Observable<__StrictHttpResponse<StateReservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = stateReservation;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stateReservation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StateReservation>;
      })
    );
  }
  /**
   * Save a stateReservation
   * @param stateReservation stateReservation
   * @return OK
   */
  saveUsingPOST4(stateReservation: StateReservation): __Observable<StateReservation> {
    return this.saveUsingPOST4Response(stateReservation).pipe(
      __map(_r => _r.body as StateReservation)
    );
  }

  /**
   * Update a StateReservation
   * @param stateReservation1 stateReservation1
   * @return OK
   */
  updateUsingPUT4Response(stateReservation1: StateReservation): __Observable<__StrictHttpResponse<StateReservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = stateReservation1;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/stateReservation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StateReservation>;
      })
    );
  }
  /**
   * Update a StateReservation
   * @param stateReservation1 stateReservation1
   * @return OK
   */
  updateUsingPUT4(stateReservation1: StateReservation): __Observable<StateReservation> {
    return this.updateUsingPUT4Response(stateReservation1).pipe(
      __map(_r => _r.body as StateReservation)
    );
  }

  /**
   * Get all stateReservations
   * @return OK
   */
  getAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<StateReservation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stateReservation/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StateReservation>>;
      })
    );
  }
  /**
   * Get all stateReservations
   * @return OK
   */
  getAllUsingGET4(): __Observable<Array<StateReservation>> {
    return this.getAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<StateReservation>)
    );
  }

  /**
   * Search a stateReservation with a ID
   * @param id The id of the stateReservation
   * @return OK
   */
  getByIdUsingGET4Response(id: number): __Observable<__StrictHttpResponse<StateReservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stateReservation/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StateReservation>;
      })
    );
  }
  /**
   * Search a stateReservation with a ID
   * @param id The id of the stateReservation
   * @return OK
   */
  getByIdUsingGET4(id: number): __Observable<StateReservation> {
    return this.getByIdUsingGET4Response(id).pipe(
      __map(_r => _r.body as StateReservation)
    );
  }

  /**
   * Delete a StateReservation by ID
   * @param id The id of the stateReservation
   * @return OK
   */
  deleteUsingDELETE4Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/stateReservation/${encodeURIComponent(String(id))}`,
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
   * Delete a StateReservation by ID
   * @param id The id of the stateReservation
   * @return OK
   */
  deleteUsingDELETE4(id: number): __Observable<{}> {
    return this.deleteUsingDELETE4Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module StateReservationControllerService {
}

export { StateReservationControllerService }
