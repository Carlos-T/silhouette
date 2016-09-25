describe('About', function () {

  beforeEach(function() {
      element(by.css('my-app header nav a:last-child')).click();
  });

  it('should have <my-about>', function () {
    var project = element(by.css('my-app my-about'));
    expect(project.isPresent()).toEqual(true);
    expect(project.getText()).toEqual("About Works!");
  });

});
