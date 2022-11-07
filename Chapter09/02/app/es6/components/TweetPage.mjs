import { loadDomElement } from '../utils/rendering.mjs'
import tweets from '../services/tweets.mjs'

class TweetPage extends HTMLElement {
  constructor () {
    super()
    this.tweet = ''
  }

  connectedCallback () {
    window.requestAnimationFrame(() => this.render())
  }

  onChange (value) {
    this.tweet = value
    const {length} = value
    this.querySelector('my-app-character-counter').value = length
    this.querySelector('my-app-progress-bar').value = length
  }

  async send () {
    await tweets.send({
      tweet: this.tweet
    })

    window.location.hash = '/'
  }

  async render () {
    this.innerHTML = ''
    const child = await loadDomElement('./app/es6/components/TweetPage.tpl.html')
    this.appendChild(child)

    const textarea = this.querySelector('textarea')

    textarea.value = this.tweet
    textarea.addEventListener('input', e => this.onChange(e.target.value))

    this
      .querySelector('button')
      .addEventListener('click', () => this.send())
  }
}

export default TweetPage
