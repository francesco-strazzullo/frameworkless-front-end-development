export const htmlToDomElement = html => {
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstChild
}

export const loadDomElement = async (path) => {
  const response = await fetch(path)
  const html = await response.text()
  return htmlToDomElement(html)
}
