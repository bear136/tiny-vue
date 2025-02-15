import { cmpMenus } from '../resources/mobile-first/menus.js'

export const demoStr = import.meta.glob('../resources/mobile-first/app/**/*.vue', { eager: false, as: 'raw' })
export const demoVue = import.meta.glob('../resources/mobile-first/app/**/*.vue', { eager: false })

// api属性
export const apis = import.meta.glob('../resources/mobile-first/app/*/webdoc/*.js', { eager: false })

const menuData = cmpMenus.slice(0)
function processMenu(menu, isTop) {
  menu.id = menu.key
  menu.label = isTop ? menu.label : `${menu.nameCn} ${menu.name}`
  if (menu.children && menu.children.length > 0) {
    menu.children.forEach((m) => processMenu(m, false))
  }
}
menuData.forEach((m) => processMenu(m, true))

export { menuData }
