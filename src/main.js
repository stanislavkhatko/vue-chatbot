import Vue from 'vue'
import Chat from './Chat.vue'
import vuetify from './plugins/vuetify';
import VueTypedJs from 'vue-typed-js';

Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Chat)
}).$mount('#app')
