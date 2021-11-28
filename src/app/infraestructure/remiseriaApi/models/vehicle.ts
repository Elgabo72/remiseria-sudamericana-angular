/* tslint:disable */
import { User } from './user';
export interface Vehicle {
  active?: boolean;
  dateCreated?: string;
  dateUpdated?: string;
  description?: string;
  idUser?: number;
  idVehicle?: number;
  mark?: string;
  model?: string;
  plaque?: string;
  type?: string;
  user?: User;
}
