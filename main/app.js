angular.module('appGen',[
    'ngResource',
    'ui.router',
    'ngMaterial'
])
.config(['$stateProvider','$urlRouterProvider', appConfig]);



function appConfig($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/about');
    
    $stateProvider

        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'pages/main.html' },
                'editorView@about': { template: '<about-feature edit-mode="true"></about-feature>' },
                'liveView@about': { template: '<about-feature edit-mode="false"></about-feature>' }
            }
        })
        
        .state('images', {
            url: '/images',
            views: {
                '': { templateUrl: 'pages/main.html' },
                'editorView@images': { template: '<images-feature edit-mode="true"></images-feature>' },
                'liveView@images': { template: '<images-feature edit-mode="false"></images-feature>' }
            }
        });
        
};
         
