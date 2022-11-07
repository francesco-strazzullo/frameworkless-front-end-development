angular
  .module('myApp', ['ngRoute'])
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/templates/list.tpl.html',
        controller: 'ListController'
      })
      .when('/tweet', {
        template: '<my-app-tweet-page></my-app-tweet-page>'
      })
      .otherwise({redirectTo: '/'})
  }])
