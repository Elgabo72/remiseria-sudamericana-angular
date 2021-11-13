/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Role } from '../models/role';

/**
 * Role Controller
 */
@Injectable({
  providedIn: 'root',
})
class RoleControllerService extends __BaseService {
  static readonly saveUsingPOST3Path = '/api/role';
  static readonly updateUsingPUT3Path = '/api/role';
  static readonly getAllUsingGET3Path = '/api/role/all';
  static readonly getByIdUsingGET3Path = '/api/role/{id}';
  static readonly deleteUsingDELETE3Path = '/api/role/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a Role
   * @param role role
   * @return OK
   */
  saveUsingPOST3Response(role: Role): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = role;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * Save a Role
   * @param role role
   * @return OK
   */
  saveUsingPOST3(role: Role): __Observable<Role> {
    return this.saveUsingPOST3Response(role).pipe(
      __map(_r => _r.body as Role)
    );
  }

  /**
   * Update a Role
   * @param role role
   * @return OK
   */
  updateUsingPUT3Response(role: Role): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = role;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * Update a Role
   * @param role role
   * @return OK
   */
  updateUsingPUT3(role: Role): __Observable<Role> {
    return this.updateUsingPUT3Response(role).pipe(
      __map(_r => _r.body as Role)
    );
  }

  /**
   * Get all roles
   * @return OK
   */
  getAllUsingGET3Response(): __Observable<__StrictHttpResponse<Array<Role>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/role/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Role>>;
      })
    );
  }
  /**
   * Get all roles
   * @return OK
   */
  getAllUsingGET3(): __Observable<Array<Role>> {
    return this.getAllUsingGET3Response().pipe(
      __map(_r => _r.body as Array<Role>)
    );
  }

  /**
   * Search a role with a ID
   * @param id The id of the role
   * @return OK
   */
  getByIdUsingGET3Response(id: number): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/role/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * Search a role with a ID
   * @param id The id of the role
   * @return OK
   */
  getByIdUsingGET3(id: number): __Observable<Role> {
    return this.getByIdUsingGET3Response(id).pipe(
      __map(_r => _r.body as Role)
    );
  }

  /**
   * Delete a Role by ID
   * @param id The id of the category
   * @return OK
   */
  deleteUsingDELETE3Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/role/${encodeURIComponent(String(id))}`,
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
   * Delete a Role by ID
   * @param id The id of the category
   * @return OK
   */
  deleteUsingDELETE3(id: number): __Observable<{}> {
    return this.deleteUsingDELETE3Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module RoleControllerService {
}

export { RoleControllerService }
