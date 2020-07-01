// src/index.js
import Vue from 'vue'
import App from './components/App.vue'
import App2 from './components/App2.vue'
import App3 from './components/App3.vue'
import App4 from './components/App4.vue'
import App5 from './components/App5.vue'

new Vue({
  render: h => h(App)
}).$mount('#app');


new Vue({
  render: h => h(App2)
}).$mount('#app-2');

new Vue({
  render: h => h(App3)
}).$mount('#app-3');


new Vue({
  render: h => h(App4)
}).$mount('#app-4');

new Vue({
  el: '#app-5',
  data: {
    loginType : 'username'
  }
});

new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!'
  }
});



var vm = new Vue({
  el:'#app-7',
  data: {
    message:'testtest',
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
})
