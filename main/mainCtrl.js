angular.module('appGen')
    .controller('mainCTRl', ['$scope','fileUpload', mainCTRl]);


function mainCTRl($scope,fileUpload) {
    var vm = this;
    vm.uploadFile = function () {
        var file = vm.myFile;
    debugger;
       var uploadUrl = "http://pictaculous.com/api/1.0/";
        fileUpload.uploadFileToUrl(file, uploadUrl);


    }
}



angular.module('appGen')
    .service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        var reader =  new FileReader();
        fd.append('image', reader.readAsBinaryString(file));
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
            debugger;
        })
        .error(function(data){
            debugger;
        });
    }
}]);