import inherits from 'inherits'
import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer'
import {append as svgAppend, create as svgCreate} from 'tiny-svg'
import {customConfig, customElements} from './element'

/**
 * A renderer that knows how to render custom elements.
 */
export default function CustomRenderer(eventBus) {
  BaseRenderer.call(this, eventBus, 2000)

  this.drawCustomElements = function(parentNode, element) {
    const type = element.type
    if (customElements.includes(type)) {
      const { url, attr } = customConfig[type]
      const customIcon = svgCreate('image', {
        ...attr,
        href: url
      })

      element['width'] = attr.width
      element['height'] = attr.height
      svgAppend(parentNode, customIcon)

      return customIcon
    }

    return this.bpmnRenderer.drawShape(parentNode, element)
  }
}

inherits(CustomRenderer, BaseRenderer)

CustomRenderer.$inject = ['eventBus', 'styles']

CustomRenderer.prototype.canRender = function(element) {
  return !element.labelTarget
}

CustomRenderer.prototype.drawShape = function(p, element) {
  return this.drawCustomElements(p, element)
}

CustomRenderer.prototype.getShapePath = function(shape) {
  console.log(shape)
}