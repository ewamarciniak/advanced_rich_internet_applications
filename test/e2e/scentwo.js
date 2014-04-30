'use strict';

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });


    describe('Search Functionality', function (){

        beforeEach(function() {
            browser.get('index.html#/view2');
        });

        describe('Dynamic Search Box', function () {

            it('should change the name of the figure caption', function() {

                var  ptor = protractor.getInstance();

                //This will not get the option required

                ptor.findElements(protractor.By.repeater("coach in coachList"));

                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).toMatch('Ben');
                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).not.toMatch('Ben Dunne');

                ptor.findElement(protractor.By.css('#thomas option:nth-child(2)')).click();

                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).toMatch('George');
                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).not.toMatch('George Best');


                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('mary');
                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).toMatch('Mary');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('bonnie');
                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).toMatch('Bonnie');

            });
        });
    });
});