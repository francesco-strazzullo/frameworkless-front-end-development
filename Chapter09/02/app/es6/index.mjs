import {angularElement as tweets} from './services/tweets.mjs'
import ProgressBar from './components/ProgressBar.mjs'
import CharacterCounter from './components/CharacterCounter.mjs'
import TweetPage from './components/TweetPage.mjs'

window.customElements.define('my-app-progress-bar', ProgressBar)
window.customElements.define('my-app-character-counter', CharacterCounter)
window.customElements.define('my-app-tweet-page', TweetPage)

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
