import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsmobile from './aws-exports.js';
import {Auth} from "@aws-amplify/auth";
Amplify.configure(awsmobile)

Vue.use(Auth, AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
