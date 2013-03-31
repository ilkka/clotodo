describe('clotodo', function () {
  'use strict';

  beforeEach(function() {
    browser().navigateTo("/base/public/index.html");
    sleep(1);
  });

  it('should go somewhere else', function() {
    expect(browser().location().url()).toBe("");
  });
});