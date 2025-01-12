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
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly saveUsingPOST6Path = '/api/user';
  static readonly updateUsingPUT6Path = '/api/user';
  static readonly getAllUsingGET6Path = '/api/user/all';
  static readonly getAllEmployesUsingGETPath = '/api/user/allEmployes';
  static readonly getByIdRoleUsingGETPath = '/api/user/findByRole/{id}';
  static readonly updatePassengerUsingPUTPath = '/api/user/updatePassenger';
  static readonly getByIdUsingGET6Path = '/api/user/{id}';
  static readonly deleteUsingDELETE6Path = '/api/user/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save a User
   * @param user user
   * @return OK
   */
  saveUsingPOST6Response(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Save a User
   * @param user user
   * @return OK
   */
  saveUsingPOST6(user: User): __Observable<User> {
    return this.saveUsingPOST6Response(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Update a User
   * @param user user
   * @return OK
   */
  updateUsingPUT6Response(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Update a User
   * @param user user
   * @return OK
   */
  updateUsingPUT6(user: User): __Observable<User> {
    return this.updateUsingPUT6Response(user).pipe(
      __map(_r => _r.body as User)
    );
  }
/**
 * Update a user's password
 * @param userId The ID of the user whose password is to be updated
 * @param newPassword The new password
 * @return OK
 */
updatePasswordUsingPUTResponse(userId: number, newPassword: string): __Observable<__StrictHttpResponse<User>> {
  let __params = this.newParams();
  let __headers = new HttpHeaders();
  
  // Crear el cuerpo de la solicitud con los datos necesarios
  const body = newPassword;

  // Crear la solicitud HTTP
  let req = new HttpRequest<any>(
    'PUT',
    this.rootUrl + `/api/user/updatePassword/${encodeURIComponent(String(userId))}`,
    body,
    {
      headers: __headers,
      params: __params,
      responseType: 'json'
    }
  );

  // Realizar la solicitud HTTP y devolver la respuesta
  return this.http.request<any>(req).pipe(
    __filter(_r => _r instanceof HttpResponse),
    __map((_r) => {
      return _r as __StrictHttpResponse<User>;
    })
  );
}

/**
 * Update a user's password
 * @param userId The ID of the user whose password is to be updated
 * @param newPassword The new password
 * @return OK
 */
updatePasswordUsingPUT(userId: number, newPassword: string): __Observable<User> {
  return this.updatePasswordUsingPUTResponse(userId, newPassword).pipe(
    __map(_r => _r.body as User)
  );
}
  /**
   * Get all users
   * @return OK
   */
  getAllUsingGET6Response(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/all`,
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
   * Get all users
   * @return OK
   */
  getAllUsingGET6(): __Observable<Array<User>> {
    return this.getAllUsingGET6Response().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Get all employes
   * @return OK
   */
  getAllEmployesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/allEmployes`,
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
   * Get all employes
   * @return OK
   */
  getAllEmployesUsingGET(): __Observable<Array<User>> {
    return this.getAllEmployesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Search a user filter id role
   * @param id The id role
   * @return OK
   */
  getByIdRoleUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/findByRole/${encodeURIComponent(String(id))}`,
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
   * Search a user filter id role
   * @param id The id role
   * @return OK
   */
  getByIdRoleUsingGET(id: number): __Observable<Array<User>> {
    return this.getByIdRoleUsingGETResponse(id).pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Update a User
   * @param user user
   * @return OK
   */
  updatePassengerUsingPUTResponse(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/user/updatePassenger`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Update a User
   * @param user user
   * @return OK
   */
  updatePassengerUsingPUT(user: User): __Observable<User> {
    return this.updatePassengerUsingPUTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Search a user with a ID
   * @param id The id of the user
   * @return OK
   */
  getByIdUsingGET6Response(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Search a user with a ID
   * @param id The id of the user
   * @return OK
   */
  getByIdUsingGET6(id: number): __Observable<User> {
    return this.getByIdUsingGET6Response(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Delete a User by ID
   * @param id The id of the user
   * @return OK
   */
  deleteUsingDELETE6Response(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/user/${encodeURIComponent(String(id))}`,
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
   * Delete a User by ID
   * @param id The id of the user
   * @return OK
   */
  deleteUsingDELETE6(id: number): __Observable<{}> {
    return this.deleteUsingDELETE6Response(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module UserControllerService {
}

export { UserControllerService }
