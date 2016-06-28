
//create main controller to pass main factory todo functions to view

(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TodosController', TodosController);

    TodosController.$inject = ['TodosFactory'];

    /* @ngInject */
    function TodosController(TodosFactory) {
        var vm = this;
        vm.title = 'TodosController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        ////////////////

        //Initializes with todos.json

        function activate() {
        	TodosFactory.getTodos()
				.then(function(response) {

                vm.todos = response;
                vm.todoPriority.value = "cLow";
            })
        }

        //Add and delete functions

        function addTodo(todoName, todoPriority){
        	TodosFactory.addTodo(vm.todos, todoName, todoPriority);
        }

        function deleteTodo(data){
            var index = vm.todos.indexOf(data);
            TodosFactory.deleteTodo(vm.todos, index);

        }
    }
})();

// Reviewed by: RN, MM