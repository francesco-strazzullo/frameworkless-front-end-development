import {angularElement as tweets} from './services/tweets.mjs'

angular
  .module('myApp')
  .service('tweets', tweets)

const boot = () => {
  angular
    .element(document)
    .ready(() => {
      angular.bootstrap(document, ['myApp'])
    })
}

boot()
