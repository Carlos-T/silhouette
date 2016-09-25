import { Injectable } from '@angular/core';
import { Project } from '../types/project';

@Injectable()
export class ProjectService {
  projects: Array<Project>;

  constructor() {
    this.projects = [{
      id: 0,
      name: 'Project1',
      description: 'Im a projet',
      scenarios: [{
        id: 0,
        name: 'Scenario1',
        description: 'This is an sceario',
        calls: [{
          id: 0,
          name: 'Call1',
          description: 'This is a call',
          path: 'blah/blah/blah',
          inputJson: {
            what: 'd\'oh'
          },
          outputJson: {
            non: 'sense'
          }
        }, {
          id: 1,
          name: 'Call2',
          description: 'This is a call',
          path: 'blah/blah/blah',
          inputJson: {
            what: 'd\'oh'
          },
          outputJson: {
            non: 'sense'
          }
        }]
      }, {
        id: 1,
        name: 'Scenario2',
        description: 'This is an sceario',
        calls: [{
          id: 2,
          name: 'Call1',
          description: 'This is a call',
          path: 'blah/blah/blah',
          inputJson: {
            what: 'd\'oh'
          },
          outputJson: {
            non: 'sense'
          }
        }, {
          id: 3,
          name: 'Call2',
          description: 'This is a call',
          path: 'blah/blah/blah',
          inputJson: {
            what: 'd\'oh'
          },
          outputJson: {
            non: 'sense'
          }
        }]
      }]
    }];
  }
  getProjects() {
    return this.projects.map(item => {
      return {name: item.name, id: item.id};
    });
  }
  getProject(id: number) :Project{
    return this.projects.find(item => item.id == id);
  }
}
