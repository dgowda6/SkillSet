(function(){
    var app = angular.module('skill-list',[]);
    app.directive('skillList', function(){
        return {
            restrict: 'E',
            templateUrl: '../../view/skill-list.html',
            controller: function(){
                
            }
        };    
    });
})();