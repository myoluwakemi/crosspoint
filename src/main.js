import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import vuetify from './plugins/vuetify'
// import Modal from "@/Commons/Modal"

Vue.config.productionTip = false

const requiredComponents = require.context(
    './components/baseComponents', true, /.vue$/
)

console.log(requiredComponents)
requiredComponents.keys().forEach(fileName => {
  const componentConfig = requiredComponents(fileName)
  const componentName = fileName.replace(/\.\w+$/, '').replace(/\.\//ig, '')

  Vue.component(componentName, componentConfig.default || componentConfig)
})

// const modal = new Vue(Modal).$mount()
//
// Vue.prototype.$modal = modal
//
// document.body.append(modal.$el)


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
