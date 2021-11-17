/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Vehicle } from '../models/vehicle';

/**
 * Vehicle Controller
 */
@Injectable({
  providedIn: 'root',
})
class VehicleControllerService extends __BaseService {
  static readonly saveUsingPOST7Path = '/api/vehicle';
  static readonly updateUsingPUT7Path = '/api/vehicle';
  static readonly getAllUsingGET7Path = '/api/vehicle/all';
  static readonly getByIdUsingGET7Path = '/api/vehicle/{id}';
  static readonly deleteUsingDELETE7Path = '/api/vehicle/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Vehicle
   * @param vehicle vehicle
   * @return OK
   */
  saveUsingPOST7Response(vehicle: Vehicle): __Observable<__StrictHttpResponse<Vehicle>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicle;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/vehicle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vehicle>;
      })
    );
  }
  /**
   * Save a Vehicle
   * @param vehicle vehicle
   * @return OK
   */
  saveUsingPOST7(vehicle: Vehicle): __Observable<Vehicle> {
    return this.saveUsingPOST7Response(vehicle).pipe(
      __map(_r => _r.body as Vehicle)
    );
  }

  /**
   * Update a Vehicle
   * @param vehicle vehicle
   * @return OK
   */
  updateUsingPUT7Response(vehicle: Vehicle): __Observable<__StrictHttpResponse<Vehicle>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vehicle;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/vehicle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vehicle>;
      })
    );
  }
  /**
   * Update a Vehicle
   * @param vehicle vehicle
   * @return OK
   */
  updateUsingPUT7(vehicle: Vehicle): __Observable<Vehicle> {
    return this.updateUsingPUT7Response(vehicle).pipe(
      __map(_r => _r.body as Vehicle)
    );
  }

  /**
   * Get all vehicles
   * @return OK
   */
  getAllUsingGET7Response(): __Observable<__StrictHttpResponse<Array<Vehicle>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/vehicle/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vehicle>>;
      })
    );
  }
  /**
   * Get all vehicles
   * @return OK
   */
  getAllUsingGET7(): __Observable<Array<Vehicle>> {
    return this.getAllUsingGET7Response().pipe(
      __map(_r => _r.body as Array<Vehicle>)
    );
  }

  /**
   * Search a vehicle with a ID
   * @param id The id of the vehicle
   * @return OK
   */
  getByIdUsingGET7Response(id: number): __Observable<__StrictHttpResponse<Vehicle>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/vehicle/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vehicle>;
      })
    );
  }
  /**
   * Search a vehicle with a ID
   * @param id The id of the vehicle
   * @return OK
   */
  getByIdUsingGET7(id: number): __Observable<Vehicle> {
    return this.getByIdUsingGET7Response(id).pipe(
      __map(_r => _r.body as Vehicle)
    );
  }

  /**
   * Delete a Vehicle by ID
   * @param id The id of the vehicle
   * @return OK
   */
  deleteUsingDELETE7Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/vehicle/${encodeURIComponent(String(id))}`,
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
   * Delete a Vehicle by ID
   * @param id The id of the vehicle
   * @return OK
   */
  deleteUsingDELETE7(id: number): __Observable<{}> {
    return this.deleteUsingDELETE7Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module VehicleControllerService {
}

export { VehicleControllerService }
