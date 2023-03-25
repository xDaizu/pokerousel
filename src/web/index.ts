import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Main'
import './i18n'

const rootDomElement = document.getElementById('app-root')
if (!rootDomElement) {
  console.error('ERROR: Root DOM element not found')
} else {
  const mainElement = createElement(Main)
  const rootElement = createRoot(rootDomElement)

  rootElement.render(mainElement)
}
