'use strict';

angular.module('appGen')
    .directive('imagesFeature',['$dataService',imagesFeature]);


function imagesFeature ($dataService){
  
    function imagesFeatureLink(scope){
        scope.data = $dataService;
    }
    
    
    return{
        restrict:'E',
        replace:true,
        templateUrl:'imagesFeature/images_tpl.html',
        scope:{
            editMode:'@'
        },
        link:imagesFeatureLink
    }
}

