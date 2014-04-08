var BackEndServiceCaller = (function () {

    // Public methods here
    return {
        doCallout: function () {

            $.get("http://echo.jsontest.com/key/value/one/two", function (data) {

                console.log(data);
            });

        }
    }

}())
