app.service("HomeService", function ($http) {
  
    this.GetDataPage1 = function () {
        return $http.get("/api/HomeAPI/GetDataPage1");
    };

    this.GetDataPage2 = function () {
        return $http.get("/api/HomeAPI/GetDataPage2");
    };

    this.GetDataPage3 = function () {
        return $http.get("/api/HomeAPI/GetDataPage3");
    };
});  