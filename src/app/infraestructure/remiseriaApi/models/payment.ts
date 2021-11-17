/* tslint:disable */
import { User } from './user';
import { Vehicle } from './vehicle';
export interface Payment {
  amount?: number;
  dateCreated?: string;
  dateUpdated?: string;
  driver?: User;
  employee?: User;
  idDriver?: number;
  idEmployee?: number;
  idPayment?: number;
  idVehicle?: number;
  paymentDate?: string;
  vehicle?: Vehicle;
}
