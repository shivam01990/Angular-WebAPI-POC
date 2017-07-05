app.service("HomeService", function ($http) {
  
	this.GetDataPage1 = function () {
		debugger;
        return $http.get("/api/HomeAPI?content=Page1");
    };

    this.GetDataPage2 = function () {
		return $http.get("/api/HomeAPI?content=Page2");
    };

    this.GetDataPage3 = function () {
		return $http.get("/api/HomeAPI?content=Page3");
    };
});  
