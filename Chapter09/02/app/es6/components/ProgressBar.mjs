import { htmlToDomElement } from '../utils/rendering.mjs'

const MAX_LENGTH = 140

class ProgressBar extends HTMLElement {
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
    this.innerHTML = ''
    this.appendChild(htmlToDomElement(`<progress value="${this.value}" max="${MAX_LENGTH}"></progress>`))
  }
}

export default ProgressBar
