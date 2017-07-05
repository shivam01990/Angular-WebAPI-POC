debugger;
app.controller("Page1Controller", function ($scope, $location, HomeService) {
    getContent();

	function getContent() {
		debugger;
        var promiseobj = HomeService.GetDataPage1();

        promiseobj.then(function (pl) {
            $scope.content = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading', errorPl;
            });
    }
});  

app.controller("Page2Controller", function ($scope, $location, HomeService) {
    getContent();

    function getContent() {
        var promiseobj = HomeService.GetDataPage2();

        promiseobj.then(function (pl) {
            $scope.content = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading', errorPl;
            });
    }
});

app.controller("Page3Controller", function ($scope, $location, HomeService) {
    getContent();

    function getContent() {
        var promiseobj = HomeService.GetDataPage3();

        promiseobj.then(function (pl) {
            $scope.content = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading', errorPl;
            });
    }
});
