import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  title = 'Angular 2';
  projects = [{
    name: 'proyecto 1'
  }, {
    name: 'proyecto 2'
  }];
}
