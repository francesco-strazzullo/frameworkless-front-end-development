angular
  .module('myApp')
  .controller('ListController', [
    '$scope',
    'tweets',
    '$location', function ($scope, tweets, $location) {
      $scope.list = []
      tweets.list().then((list) => {
        $scope.$apply(() => {
          $scope.list = list
        })
      })

      $scope.goToNewTweet = () => {
        $location.path('/tweet')
      }
    }])
