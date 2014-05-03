'use strict';

describe('my app', function () {

    browser.get('index.html');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });

    describe('Repeater Function', function () {

        beforeEach(function () {
            browser.get('index.html#/view2');
        });

        describe('Number of items', function () {
            it('should have twelve items', function() {
                var elems = element.all(by.repeater('coach in coachList'));
                expect(elems.count()).toBe(12);
            });


            it('should have xxxs', function() {

                var elems = element.all(by.repeater('coach in coachList'));

                expect(elems.By.binding('coach.name')).toBe('Ben');

            });

        });
    });


});