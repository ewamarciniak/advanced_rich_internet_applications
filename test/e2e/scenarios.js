'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Welcome to the Gymnasium App/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
        toMatch(/Find me in Partial 2/);
    });

  });

    describe('hello-protractor', function (){

        beforeEach(function() {
            browser.get('index.html');
        });

        describe("index", function () {

            it('should display the correct title', function (){

                expect(browser.getTitle()).toBe('Gymnasium App')
            });
        });

    });
});
