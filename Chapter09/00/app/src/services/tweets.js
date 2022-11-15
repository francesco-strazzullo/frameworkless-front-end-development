angular
  .module('myApp')
  .service('tweets', ['$http', function ($http) {
    const URL = 'http://localhost:3000/api/tweet'
    const list = () => {
      return $http
        .get(URL)
        .then((response) => response.data)
    }

    const send = (data) => {
      return $http
        .post(URL, data)
        .then((response) => response.data)
    }

    return {
      list: list,
      send: send
    }
  }])
