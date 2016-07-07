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
        templateUrl:'images/images_tpl.html',
        scope:{
            editMode:'@'
        },
        link:imagesFeatureLink
    }
}

