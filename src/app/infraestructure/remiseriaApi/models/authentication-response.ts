/* tslint:disable */
import { User } from './user';
export interface AuthenticationResponse {
  jwt?: string;
  user?: User;
}
