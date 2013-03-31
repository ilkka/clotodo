describe('clotodo', function () {
  'use strict';

  beforeEach(function() {
    browser().navigateTo("/base/public/index.html");
    sleep(0.2);
  });

  it('should show a count of 4', function() {
    expect(element('.todo-count').text()).toBe("4");
  });
});