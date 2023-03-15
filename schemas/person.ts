import { Farm } from './farm';

export interface Person {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface Grower extends Person {
  farms: Farm[];
}

export interface SimplifiedGrower extends Person {}

export interface Client extends Person {}
