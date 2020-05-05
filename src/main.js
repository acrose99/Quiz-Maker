import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
import {Auth} from "@aws-amplify/auth";
Amplify.configure(aws_exports)
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.use(Auth, AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
