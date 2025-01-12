/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { User } from '../models/user';
import { CreateUserDto } from '../models/create-user-dto';

/**
 * Auth Controller
 */
@Injectable({
  providedIn: 'root',
})
class AuthControllerService extends __BaseService {
  static readonly createTokenUsingPOSTPath = '/api/auth/authenticate';
  static readonly createTokenPassengersUsingPOSTPath = '/api/auth/authenticatePassengers';
  static readonly saveUserUsingPOSTPath = '/api/auth/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * createToken
   * @param request request
   * @return OK
   */
  createTokenUsingPOSTResponse(request: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * createToken
   * @param request request
   * @return OK
   */
  createTokenUsingPOST(request: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.createTokenUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }

  /**
   * createTokenPassengers
   * @param request request
   * @return OK
   */
  createTokenPassengersUsingPOSTResponse(request: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/authenticatePassengers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * createTokenPassengers
   * @param request request
   * @return OK
   */
  createTokenPassengersUsingPOST(request: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.createTokenPassengersUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }

  /**
   * Register User
   * @param user user
   * @return OK
   */
  saveUserUsingPOSTResponse(user: CreateUserDto): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/register`,
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
   * Register User
   * @param user user
   * @return OK
   */
  saveUserUsingPOST(user: CreateUserDto): __Observable<User> {
    return this.saveUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module AuthControllerService {
}

export { AuthControllerService }
