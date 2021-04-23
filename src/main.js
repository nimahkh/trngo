import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from '../store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faWhatsapp, faSlackHash } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
    faTelegramPlane,
    faSearch,
    faWhatsapp,
    faSlackHash,
    faGripVertical
)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layer', FontAwesomeLayers)
Vue.component('fa-layer-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
