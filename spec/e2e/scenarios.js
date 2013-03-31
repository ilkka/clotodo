describe('clotodo', function () {
  'use strict';

  beforeEach(function() {
    browser().navigateTo("/base/public/index.html");
    sleep(1);
  });

  it('should show a count of 3', function() {
    expect(element('span.count').text()).toBe("3");
  });
});