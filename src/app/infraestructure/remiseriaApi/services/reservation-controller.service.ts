/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Reservation } from '../models/reservation';

/**
 * Reservation Controller
 */
@Injectable({
  providedIn: 'root',
})
class ReservationControllerService extends __BaseService {
  static readonly saveUsingPOST2Path = '/api/reservation';
  static readonly updateUsingPUT2Path = '/api/reservation';
  static readonly getAllUsingGET2Path = '/api/reservation/all';
  static readonly getByIdUsingGET2Path = '/api/reservation/{id}';
  static readonly deleteUsingDELETE2Path = '/api/reservation/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a reservation
   * @param reservation reservation
   * @return OK
   */
  saveUsingPOST2Response(reservation: Reservation): __Observable<__StrictHttpResponse<Reservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = reservation;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/reservation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reservation>;
      })
    );
  }
  /**
   * Save a reservation
   * @param reservation reservation
   * @return OK
   */
  saveUsingPOST2(reservation: Reservation): __Observable<Reservation> {
    return this.saveUsingPOST2Response(reservation).pipe(
      __map(_r => _r.body as Reservation)
    );
  }

  /**
   * Update a Reservation
   * @param reservation1 reservation1
   * @return OK
   */
  updateUsingPUT2Response(reservation1: Reservation): __Observable<__StrictHttpResponse<Reservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = reservation1;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/reservation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reservation>;
      })
    );
  }
  /**
   * Update a Reservation
   * @param reservation1 reservation1
   * @return OK
   */
  updateUsingPUT2(reservation1: Reservation): __Observable<Reservation> {
    return this.updateUsingPUT2Response(reservation1).pipe(
      __map(_r => _r.body as Reservation)
    );
  }

  /**
   * Get all reservations
   * @return OK
   */
  getAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<Reservation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/reservation/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Reservation>>;
      })
    );
  }
  /**
   * Get all reservations
   * @return OK
   */
  getAllUsingGET2(): __Observable<Array<Reservation>> {
    return this.getAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<Reservation>)
    );
  }

  /**
   * Search a reservation with a ID
   * @param id The id of the reservation
   * @return OK
   */
  getByIdUsingGET2Response(id: number): __Observable<__StrictHttpResponse<Reservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/reservation/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reservation>;
      })
    );
  }
  /**
   * Search a reservation with a ID
   * @param id The id of the reservation
   * @return OK
   */
  getByIdUsingGET2(id: number): __Observable<Reservation> {
    return this.getByIdUsingGET2Response(id).pipe(
      __map(_r => _r.body as Reservation)
    );
  }

  /**
   * Delete a Reservation by ID
   * @param id The id of the reservation
   * @return OK
   */
  deleteUsingDELETE2Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/reservation/${encodeURIComponent(String(id))}`,
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
   * Delete a Reservation by ID
   * @param id The id of the reservation
   * @return OK
   */
  deleteUsingDELETE2(id: number): __Observable<{}> {
    return this.deleteUsingDELETE2Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ReservationControllerService {
}

export { ReservationControllerService }
