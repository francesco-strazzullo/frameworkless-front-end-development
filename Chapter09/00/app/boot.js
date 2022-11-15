angular
  .module('myApp', ['ngRoute'])
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/templates/list.tpl.html',
        controller: 'ListController'
      })
      .when('/tweet', {
        templateUrl: 'app/templates/tweet.tpl.html',
        controller: 'TweetController'
      })
      .otherwise({redirectTo: '/'})
  }])

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['myApp'])
  })
