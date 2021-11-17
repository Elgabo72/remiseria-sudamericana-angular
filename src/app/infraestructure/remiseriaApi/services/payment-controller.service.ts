/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Payment } from '../models/payment';

/**
 * Payment Controller
 */
@Injectable({
  providedIn: 'root',
})
class PaymentControllerService extends __BaseService {
  static readonly saveUsingPOSTPath = '/api/payment';
  static readonly updateUsingPUTPath = '/api/payment';
  static readonly getAllUsingGETPath = '/api/payment/all';
  static readonly getByIdUsingGETPath = '/api/payment/{id}';
  static readonly deleteUsingDELETEPath = '/api/payment/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a payment
   * @param payment payment
   * @return OK
   */
  saveUsingPOSTResponse(payment: Payment): __Observable<__StrictHttpResponse<Payment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = payment;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/payment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Payment>;
      })
    );
  }
  /**
   * Save a payment
   * @param payment payment
   * @return OK
   */
  saveUsingPOST(payment: Payment): __Observable<Payment> {
    return this.saveUsingPOSTResponse(payment).pipe(
      __map(_r => _r.body as Payment)
    );
  }

  /**
   * Update a Payment
   * @param payment1 payment1
   * @return OK
   */
  updateUsingPUTResponse(payment1: Payment): __Observable<__StrictHttpResponse<Payment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = payment1;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/payment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Payment>;
      })
    );
  }
  /**
   * Update a Payment
   * @param payment1 payment1
   * @return OK
   */
  updateUsingPUT(payment1: Payment): __Observable<Payment> {
    return this.updateUsingPUTResponse(payment1).pipe(
      __map(_r => _r.body as Payment)
    );
  }

  /**
   * Get all payments
   * @return OK
   */
  getAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Payment>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/payment/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Payment>>;
      })
    );
  }
  /**
   * Get all payments
   * @return OK
   */
  getAllUsingGET(): __Observable<Array<Payment>> {
    return this.getAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Payment>)
    );
  }

  /**
   * Search a payment with a ID
   * @param id The id of the payment
   * @return OK
   */
  getByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Payment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/payment/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Payment>;
      })
    );
  }
  /**
   * Search a payment with a ID
   * @param id The id of the payment
   * @return OK
   */
  getByIdUsingGET(id: number): __Observable<Payment> {
    return this.getByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Payment)
    );
  }

  /**
   * Delete a Payment by ID
   * @param id The id of the payment
   * @return OK
   */
  deleteUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/payment/${encodeURIComponent(String(id))}`,
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
   * Delete a Payment by ID
   * @param id The id of the payment
   * @return OK
   */
  deleteUsingDELETE(id: number): __Observable<{}> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module PaymentControllerService {
}

export { PaymentControllerService }
