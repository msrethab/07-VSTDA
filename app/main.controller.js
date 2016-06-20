
//create main controller to pass main factory todo functions to view

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'MainFactory', '$scope'];

    /* @ngInject */
    function MainController($http, MainFactory, $scope) {
        var vm = this;
        vm.title = 'MainController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        ////////////////

        function activate() {
        	MainFactory.getTodos()
				.then(function(response) {

                vm.todos = response;

            })
        }

        function addTodo(todoName, todoPriority){
        	MainFactory.addTodo(vm.todos, todoName, todoPriority);
        }

        function deleteTodo($index){
            MainFactory.deleteTodo(vm.todos, $index);

        }
    }
})();