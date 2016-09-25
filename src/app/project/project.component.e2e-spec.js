describe('Project', function () {

  beforeEach(function() {
      element(by.css('my-app header nav a:first-child')).click();
  });

  it('should have <my-project>', function () {
    var project = element(by.css('my-app my-project'));
    expect(project.isPresent()).toEqual(true);
    expect(project.getText()).toEqual("Project Works!");
  });

});
