
//create main factory to get, add and delete todos

(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http'];

    /* @ngInject */
    function MainFactory($http) {
        var service = {
            getTodos: getTodos,
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
        return service;

        ////////////////

        function getTodos() {
            return $http({
                method: 'GET',
                url: '../mock/todos.json'
            }).then(function(response){

                return response.data;

            });

        }

        function addTodo(todos, todoName, todoPriority){

            var newTodo = {name: todoName, priority: todoPriority};
            return todos.push(newTodo);

        }

        function deleteTodo(todos, index){

            return todos.splice(index, 1);

        }
    }
})();