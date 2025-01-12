/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Permission } from '../models/permission';

/**
 * Permission Controller
 */
@Injectable({
  providedIn: 'root',
})
class PermissionControllerService extends __BaseService {
  static readonly saveUsingPOST1Path = '/api/permission';
  static readonly updateUsingPUT1Path = '/api/permission';
  static readonly getAllUsingGET1Path = '/api/permission/all';
  static readonly getByIdUsingGET1Path = '/api/permission/{id}';
  static readonly deleteUsingDELETE1Path = '/api/permission/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a permission
   * @param permission permission
   * @return OK
   */
  saveUsingPOST1Response(permission: Permission): __Observable<__StrictHttpResponse<Permission>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = permission;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/permission`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Permission>;
      })
    );
  }
  /**
   * Save a permission
   * @param permission permission
   * @return OK
   */
  saveUsingPOST1(permission: Permission): __Observable<Permission> {
    return this.saveUsingPOST1Response(permission).pipe(
      __map(_r => _r.body as Permission)
    );
  }

  /**
   * Update a Permission
   * @param permission1 permission1
   * @return OK
   */
  updateUsingPUT1Response(permission1: Permission): __Observable<__StrictHttpResponse<Permission>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = permission1;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/permission`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Permission>;
      })
    );
  }
  /**
   * Update a Permission
   * @param permission1 permission1
   * @return OK
   */
  updateUsingPUT1(permission1: Permission): __Observable<Permission> {
    return this.updateUsingPUT1Response(permission1).pipe(
      __map(_r => _r.body as Permission)
    );
  }

  /**
   * Get all permissions
   * @return OK
   */
  getAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<Permission>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/permission/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Permission>>;
      })
    );
  }
  /**
   * Get all permissions
   * @return OK
   */
  getAllUsingGET1(): __Observable<Array<Permission>> {
    return this.getAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<Permission>)
    );
  }

  /**
   * Search a permission with a ID
   * @param id The id of the permission
   * @return OK
   */
  getByIdUsingGET1Response(id: number): __Observable<__StrictHttpResponse<Permission>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/permission/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Permission>;
      })
    );
  }
  /**
   * Search a permission with a ID
   * @param id The id of the permission
   * @return OK
   */
  getByIdUsingGET1(id: number): __Observable<Permission> {
    return this.getByIdUsingGET1Response(id).pipe(
      __map(_r => _r.body as Permission)
    );
  }

  /**
   * Delete a Permission by ID
   * @param id The id of the permission
   * @return OK
   */
  deleteUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/permission/${encodeURIComponent(String(id))}`,
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
   * Delete a Permission by ID
   * @param id The id of the permission
   * @return OK
   */
  deleteUsingDELETE1(id: number): __Observable<{}> {
    return this.deleteUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module PermissionControllerService {
}

export { PermissionControllerService }
