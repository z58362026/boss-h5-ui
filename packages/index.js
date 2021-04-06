import Button from './Button'
import Button2 from './Button2'

const components = {
    Button,
    Button2
}

function install(Vue) {
    Object.values(components).forEach(component => {
        if (component.install) {
            Vue.use(component)
        } else if (component.name) {
            Vue.component('Boss' + component.name, component)
        }
    })
}

export const exportObject = { install, ...components }

export default { install, ...components }
