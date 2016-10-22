describe('Settings', function () {

  beforeEach(function() {
      element(by.css('sil-app header nav a:last-child')).click();
  });

  it('should have <settings>', function () {
    var project = element(by.css('sil-app settings'));
    expect(project.isPresent()).toEqual(true);
    expect(project.getText()).toEqual("Settings Works!");
  });

});
