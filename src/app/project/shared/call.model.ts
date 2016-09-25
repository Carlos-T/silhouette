import { Injectable } from '@angular/core';

@Injectable()
export class Call {
  id: number;
  name: string;
  description: string;
  path: string;
  inputJson: Object;
  outputJson: Object;
}
