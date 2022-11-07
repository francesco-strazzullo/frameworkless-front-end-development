angular
  .module('myApp')
  .controller('TweetController', [
    '$scope',
    'tweets',
    '$location',
    function (
      $scope,
      tweets,
      $location
    ) {
      $scope.loading = false
      $scope.tweet = ''

      $scope.sendTweet = () => {
        $scope.loading = true
        tweets.send({
          tweet: $scope.tweet
        }).then(() => {
          $scope.$apply(() => {
            $scope.tweet = ''
            $scope.loading = false
            $location.path('/')
          })
        })
      }
    }])
