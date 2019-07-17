import Vue from 'vue'
import Router from 'vue-router'

const _e6d6d496 = () => import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */).then(m => m.default || m)
const _6f0c59c7 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _ffeb10a0 = () => import('..\\pages\\exit.vue' /* webpackChunkName: "pages_exit" */).then(m => m.default || m)
const _02172e9c = () => import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */).then(m => m.default || m)
const _a0b0e466 = () => import('..\\pages\\changeCity.vue' /* webpackChunkName: "pages_changeCity" */).then(m => m.default || m)
const _2fe2eff6 = () => import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */).then(m => m.default || m)
const _b53692a0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

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
			path: "/register",
			component: _e6d6d496,
			name: "register"
		},
		{
			path: "/login",
			component: _6f0c59c7,
			name: "login"
		},
		{
			path: "/exit",
			component: _ffeb10a0,
			name: "exit"
		},
		{
			path: "/cart",
			component: _02172e9c,
			name: "cart"
		},
		{
			path: "/changeCity",
			component: _a0b0e466,
			name: "changeCity"
		},
		{
			path: "/products",
			component: _2fe2eff6,
			name: "products"
		},
		{
			path: "/",
			component: _b53692a0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
