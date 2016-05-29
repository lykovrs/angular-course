var app = angular.module('todomvc', []);

app.directive('todoList', function () {

    return {
        scope: true,
        link: function (scope) {
            scope.todos = [];
            scope.newTodo = '';

            scope.addTodo = () => {
                var newTodo = {
                    title: scope.newTodo.trim()
                };

                if (newTodo.title) {
                    scope.todos.push(newTodo);
                    scope.newTodo = '';
                }
            };

            scope.removeTodo = todo => {
                scope.todos.splice(scope.todos.indexOf(todo), 1);
            };
        }
    };
});

app.directive('todoItem', () => {

    return {
        restrict: "E",
        scope: {
            todo: '=',
            remove: '&'
        },
        template: ` <li>
          <div class="view">
            <label>{{todo.title}}</label>
            <button class="destroy" ng-click="remove()"></button>
          </div>
        </li>`,
        link: function (scope) {}
    };
});

//# sourceMappingURL=script-compiled.js.map