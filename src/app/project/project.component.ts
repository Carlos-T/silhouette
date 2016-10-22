import { Component, OnInit } from '@angular/core';

import { ProjectService, Project } from './shared';

@Component({
  selector: 'sil-project',
  template: require('./project.component.html'),
  styles: [require('./project.component.scss')]
})
export class ProjectComponent implements OnInit {
  projects: Array<{}>;
  project: Project;
  constructor() {
    let projectService = new ProjectService;

    this.projects = projectService.getProjects();
    if (this.projects.length > 0) {
      console.log('There are more projects', this.projects.length);
      this.loadProject(0);
    }
  }

  ngOnInit() {
    console.log('Hello Project');
  }

  public loadProject(index: number) {
    if (!this.project || this.project.id !== index) {
      console.log('loading project ' + index);
      let projectService = new ProjectService;

      this.project = projectService.getProject(index);
    }
  }
}
