/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://200.121.153.246:12345';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
