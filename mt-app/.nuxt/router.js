import Vue from 'vue'
import Router from 'vue-router'

const _5c67568f = () => import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */).then(m => m.default || m)
const _7f35e1ea = () => import('../pages/changeCity.vue' /* webpackChunkName: "pages/changeCity" */).then(m => m.default || m)
const _6bf41980 = () => import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */).then(m => m.default || m)
const _450534e6 = () => import('../pages/exit.vue' /* webpackChunkName: "pages/exit" */).then(m => m.default || m)
const _8011b0ec = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _0f1a44ef = () => import('../pages/order.vue' /* webpackChunkName: "pages/order" */).then(m => m.default || m)
const _c77cb15a = () => import('../pages/products.vue' /* webpackChunkName: "pages/products" */).then(m => m.default || m)
const _0e1965dc = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _1360f71a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/cart",
			component: _5c67568f,
			name: "cart"
		},
		{
			path: "/changeCity",
			component: _7f35e1ea,
			name: "changeCity"
		},
		{
			path: "/detail",
			component: _6bf41980,
			name: "detail"
		},
		{
			path: "/exit",
			component: _450534e6,
			name: "exit"
		},
		{
			path: "/login",
			component: _8011b0ec,
			name: "login"
		},
		{
			path: "/order",
			component: _0f1a44ef,
			name: "order"
		},
		{
			path: "/products",
			component: _c77cb15a,
			name: "products"
		},
		{
			path: "/register",
			component: _0e1965dc,
			name: "register"
		},
		{
			path: "/",
			component: _1360f71a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
