describe("My callout", function () {
    it("Should hit remote endpoint", function () {

        sinon.spy($, "ajax");

        BackEndServiceCaller.doCallout();

        var call = $.ajax.getCall(0);

        expect (call).not.toBeNull();

        $.ajax.restore();

    })
})
