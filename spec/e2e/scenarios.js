describe('clotodo', function () {
  'use strict';

  beforeEach(function() {
    browser().navigateTo("/base/public/index.html");
    sleep(0.2);
  });

  it('should show a count of 4', function() {
    expect(element('.todo-count').text()).toBe("4");
  });

  it('should show 4 elements in the list', function() {
    expect(repeater('.todos li').count()).toBe(4);
  })

  it('should filter the todos when the user enters text into the search box', function() {
    expect(repeater('.todos li').count()).toBe(4);
    input('query').enter('learn');
    expect(repeater('.todos li').count()).toBe(2);
    input('query').enter('angul');
    expect(repeater('.todos li').count()).toBe(1);
  });
});