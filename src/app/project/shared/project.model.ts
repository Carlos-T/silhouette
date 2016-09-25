import { Injectable } from '@angular/core';
import { Scenario } from './';

@Injectable()
export class Project {
  id: number;
  name: string;
  description: string;
  scenarios: Array<Scenario>;
}
