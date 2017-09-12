// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import {SET_USER_LOGGED_IN, USER_LOGGED_OUT} from './store/mutations'
import firebase from 'firebase'
import {config} from './firebaseconfig'
import('../node_modules/firebaseui/dist/firebaseui.css')

Vue.use(Vuetify)
Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit(SET_USER_LOGGED_IN)
        this.$router.push('/success')
      } else {
        this.$store.commit(USER_LOGGED_OUT)
        this.$router.push('/auth')
      }
     })
  },
  store,
  template: '<App/>',
  components: { App }
})
