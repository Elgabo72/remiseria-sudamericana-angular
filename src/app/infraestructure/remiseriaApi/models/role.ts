/* tslint:disable */
import { Permission } from './permission';
export interface Role {
  dateCreated?: string;
  dateUpdated?: string;
  description?: string;
  idRole?: number;
  permissions?: Array<Permission>;
}
