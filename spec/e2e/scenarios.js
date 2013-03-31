describe('clotodo', function () {
  'use strict';

  beforeEach(function() {
    browser().navigateTo("../../public/index.html");
  });

  it('should go somewhere else', function() {
    expect(browser().location().url()).toBe("foobar");
  });
});