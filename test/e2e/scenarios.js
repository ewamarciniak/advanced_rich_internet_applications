'use strict';

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });

/*    describe('view1', function() {

        beforeEach(function() {
            browser.get('index.html#/view1');
        });

        it('should render view1 when user navigates to /view1', function() {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
                toMatch(/Welcome to the Gymnasium App/);
        });

    });*/

    describe('view2', function() {

        beforeEach(function() {
            browser.get('index.html#/view2');
        });

        it('should render view2 when user navigates to /view2', function() {
            expect(element.all(by.css('[ng-view] h4')).first().getText()).
                toMatch(/Find a Gym Coach/);
        });

    });

    describe('view3', function() {

        beforeEach(function() {
            browser.get('index.html#/view3');
        });


        it('should render view3 when user navigates to /view3', function() {
            expect(element.all(by.css('[ng-view] h3')).first().getText()).
                toMatch(/Find Our Gymnasium Locations/);
        });

    });

    describe('view4', function() {

        beforeEach(function() {
            browser.get('index.html#/view4');
        });


        it('should render view4 when user navigates to /view4', function() {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
                toMatch(/Your Exercise Statistics/);
        });

    });

    describe('view5', function() {

        beforeEach(function() {
            browser.get('index.html#/view5');
        });


        it('should render view5 when user navigates to /view5', function() {
            expect(element.all(by.css('[ng-view] iframe')).first().getText()).
                toMatch('');
        });

    });

    describe('Gymnasium App Title', function (){

        beforeEach(function() {
            browser.get('index.html');
        });

        describe("index", function () {

            it('should display the correct title', function (){

                expect(browser.getTitle()).toBe('Gymnasium App')
            });
        });
    });

    describe('ng-bind-html', function (){

        beforeEach(function() {
            browser.get('index.html#/view2');
        });

        describe("sort options", function () {

            it('should check ng-bind-html', function() {
                expect(element(by.binding('HTMLalpha')).getText()).toBe(
                    'Alphabetical');
                expect(element(by.binding('HTMLlowestPrice')).getText()).toBe(
                    'Lowest Price');
                expect(element(by.binding('HTMLhighestPrice')).getText()).toBe(
                    'Highest Price');
                expect(element(by.binding('HTMLCategory')).getText()).toBe(
                    'Category');
                expect(element(by.binding('HTMLemail')).getText()).toBe(
                    'Email');
                expect(element(by.binding('HTMLcreated_at')).getText()).toBe(
                    'Created At');
                expect(element(by.binding('HTMLupdatedAt')).getText()).toBe(
                    'Updated At');
                expect(element(by.binding('HTMLemail')).getText()).toBe(
                    'Email');
            });

        });
    });

    describe('ng-click functions', function (){

        beforeEach(function() {
            browser.get('index.html#/view3');
        });

        describe("Google maps function", function () {

            it('should show correct text for gym location ', function() {

                var  ptor = protractor.getInstance();

                //This will not get the option required

                expect(ptor.element(by.css('#l1')).getText()).toMatch('Cork Street');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(2)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Quarry Road');
                expect(ptor.findElement(protractor.By.css('#map')).getText()).not.toMatch('');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(3)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Bishopstown Road');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(4)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Henry Street');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(5)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Ennis Road');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(6)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Rindoon Park');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(7)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Scarlett Street, Drogheda');
            });

        });
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
                expect(ptor.findElement(protractor.By.css('#figcaption')).getText()).not.toMatch('Bonnie Dowling');

            });
        });
    });


});