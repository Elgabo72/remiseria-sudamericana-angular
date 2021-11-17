/* tslint:disable */
import { User } from './user';
import { StateReservation } from './state-reservation';
import { Tariff } from './tariff';
export interface Reservation {
  dateCreated?: string;
  dateUpdated?: string;
  description?: string;
  driver?: User;
  idDriver?: number;
  idPassenger?: number;
  idReservation?: number;
  idStateReservation?: number;
  idTariff?: number;
  passenger?: User;
  stateReservation?: StateReservation;
  tariff?: Tariff;
  travelDate?: string;
}
