import { SimplifiedCommodity, Variety } from './commodity';
import { Farm } from './farm';
import { Client, SimplifiedGrower } from './person';

export interface Harvest {
  id: string;
  grower: SimplifiedGrower;
  farm: Farm;
  client: Client;
  commodity: SimplifiedCommodity;
  variety: Variety;
  createdAt: string;
}
