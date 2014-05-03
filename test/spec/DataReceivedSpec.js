describe('Data receiving', function () {
    var appCtrl;
    beforeEach(function ($controller) {
        appCtrl  = $controller('MyCtrl4');
    });

    describe('MyCtrl4', function ($scope, $http) {

        it('returns data when making a request', function () {

            expect(errorCallback).not.toHaveBeenCalled();
        });
    });

});
$scope.services = {};
$http.get('./workout_data_1.json').then(function (result) {
        $scope.services = result.data["products"];
        expect($scope.services).toBe(2);
    }
);
