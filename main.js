import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import '@/filter/index.js'
import FontIcon from '@/components/FontIcon/FontIcon.vue'
import '@/static/iconfont/iconfont.css'
import '@/static/css/app.css'

Vue.use(uView)
Vue.component('FontIcon', FontIcon)

uni.$u.config.unit = 'px'

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()

Vue.config.productionTip = false
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
