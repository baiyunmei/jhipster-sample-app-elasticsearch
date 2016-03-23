(function() {
    'use strict';

    angular
        .module('sampleElasticSearchApp')
        .controller('LabelDetailController', LabelDetailController);

    LabelDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Label', 'Operation'];

    function LabelDetailController($scope, $rootScope, $stateParams, entity, Label, Operation) {
        var vm = this;
        vm.label = entity;
        vm.load = function (id) {
            Label.get({id: id}, function(result) {
                vm.label = result;
            });
        };
        var unsubscribe = $rootScope.$on('sampleElasticSearchApp:labelUpdate', function(event, result) {
            vm.label = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
