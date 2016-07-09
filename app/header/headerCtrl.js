'use strict';

angular.module('appGen')
    .controller('headerCTRl', ['$scope', 'Upload', headerCTRl]);


function headerCTRl($scope, Upload) {
    var vm = this;
    //define defaults primary and secondary colors
    vm.primary = 'blue';
    vm.secondary = 'green';
    vm.uploadFiles = uploadFiles;

    function uploadFiles(file, errFiles) {
        vm.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'http://localhost:8080/getColors',
                data: {
                    file: file
                }
            });

            file.upload.then(function (res) {
                vm.primary = res.data[0];
                vm.secondary = res.data[1];
            }, function (err) {
                throw 'Error occurred: ' + err.status;
            });
        }
    }
}