'use strict';

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
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

    })
});