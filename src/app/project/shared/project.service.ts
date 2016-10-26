import { Injectable } from '@angular/core';
import { Project } from './';

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
        name: 'Scenario11',
        description: 'This is an sceario',
        calls: [{
          id: 0,
          name: 'Call111',
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
          name: 'Call112',
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
        name: 'Scenario12',
        description: 'This is an sceario',
        calls: [{
          id: 2,
          name: 'Call121',
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
          name: 'Call122',
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
    }, {
      id: 1,
      name: 'Project2',
      description: 'Im a projet',
      scenarios: [{
        id: 2,
        name: 'Scenario21',
        description: 'This is an sceario',
        calls: [{
          id: 5,
          name: 'Call211',
          description: 'This is a call',
          path: 'blah/blah/blah',
          inputJson: {
            what: 'd\'oh'
          },
          outputJson: {
            non: 'sense'
          }
        }, {
          id: 6,
          name: 'Call212',
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
        id: 3,
        name: 'Scenario22',
        description: 'This is an sceario',
        calls: [{
          id: 7,
          name: 'Call221',
          description: 'This is a call',
          path: 'blah/blah/blah',
          inputJson: {
            what: 'd\'oh'
          },
          outputJson: {
            non: 'sense'
          }
        }, {
          id: 8,
          name: 'Call222',
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
  getProject(id: number): Project {
    return this.projects.find(item => item.id === id);
  }
}
