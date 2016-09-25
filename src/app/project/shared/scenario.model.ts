import { Injectable } from '@angular/core';
import { Call } from './';

@Injectable()
export class Scenario {
  id: number;
  name: string;
  description: string;
  calls: Array<Call>;
}
