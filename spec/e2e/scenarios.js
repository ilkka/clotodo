describe('clotodo', function () {
  'use strict';

  beforeEach(function() {
    browser().navigateTo("/base/public/index.html");
  });

  it('should go somewhere else', function() {
    sleep(1);
    expect(browser().location().url()).toBe("");
  });
});