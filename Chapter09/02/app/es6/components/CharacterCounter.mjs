import { htmlToDomElement } from '../utils/rendering.mjs'

const MAX_LENGTH = 140

class CharacterCounter extends HTMLElement {
  static get observedAttributes () {
    return [
      'value'
    ]
  }

  get value () {
    if (!this.hasAttribute('value')) {
      return 0
    }

    return parseInt(this.getAttribute('value'), 10)
  }

  set value (val) {
    this.setAttribute('value', val)
  }

  attributeChangedCallback () {
    window.requestAnimationFrame(() => this.render())
  }

  connectedCallback () {
    window.requestAnimationFrame(() => this.render())
  }

  render () {
    const remainingCharacters = Math.max(MAX_LENGTH - this.value, 0)
    this.innerHTML = ''
    this.appendChild(htmlToDomElement(`<span class="char-count">Characters left: ${remainingCharacters}</span>`))
  }
}

export default CharacterCounter
