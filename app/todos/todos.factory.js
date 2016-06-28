
//create main factory to get, add and delete todos

(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TodosFactory', TodosFactory);

    TodosFactory.$inject = ['$http'];

    /* @ngInject */
    function TodosFactory($http) {
        var service = {
            getTodos: getTodos,
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
        return service;

        ////////////////

        // Gets todos from json file

        function getTodos() {
            return $http({
                method: 'GET',
                url: '../mock/todos.json'
            }).then(function(response){

                return response.data;

            });

        }

        //Adds and delete todos methods

        function addTodo(todos, todoName, todoPriority){

            var newTodo = {name: todoName, priority: todoPriority};
            return todos.push(newTodo);

        }

        function deleteTodo(todos, index){

            return todos.splice(index, 1);

        }
    }
})();

// Reviewed by: RN MM