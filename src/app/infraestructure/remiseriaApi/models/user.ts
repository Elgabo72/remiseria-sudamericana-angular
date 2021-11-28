/* tslint:disable */
import { Role } from './role';
export interface User {
  active?: boolean;
  address?: string;
  dateCreated?: string;
  dateUpdated?: string;
  email?: string;
  firstName?: string;
  idRol?: number;
  idUser?: number;
  lastName?: string;
  password?: string;
  phone?: string;
  role?: Role;
  username?: string;
}
