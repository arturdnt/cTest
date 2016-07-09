'use strict';

angular.module('appGen')
    .directive('aboutFeature',['$dataService',aboutFeature]);


function aboutFeature ($dataService){
  
    function aboutFitureLink(scope){
        scope.data = $dataService;
    }
    
    
    return{
        restrict:'E',
        replace:true,
        templateUrl:'aboutFeature/about_tpl.html',
        scope:{
            editMode:'@'
        },
        link:aboutFitureLink
    }
}

