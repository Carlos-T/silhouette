describe('Project', function () {

  beforeEach(function() {
      element(by.css('sil-app header nav a:first-child')).click();
  });

  it('should have <sil-project>', function () {
    var project = element(by.css('sil-app sil-project'));
    expect(project.isPresent()).toEqual(true);
    expect(project.getText()).toEqual("Project Works!");
  });

});
