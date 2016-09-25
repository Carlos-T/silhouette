import { Component, OnInit } from '@angular/core';

import { ProjectService, Project } from './shared';

@Component({
  selector: 'my-project',
  template: require('./project.component.html'),
  styles: [require('./project.component.scss')]
})
export class ProjectComponent implements OnInit {
  project: Project;
  constructor(index: number) {
    var projectService = new ProjectService;

    this.project = projectService.getProject(index);
  }

  ngOnInit() {
    console.log('Hello Project');
  }

}
