// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('Project Component', () => {
  const html = '<sil-project></sil-project>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ProjectComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Project Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
