// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <main id="app">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/introduction">Introduction</router-link></li>
          <li><router-link to="/grammar">Grammar Notes</router-link></li>
          <li><router-link to="/references">References</router-link>
          <li><router-link to="/wordlist">Word List</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </main>
  `
}).$mount('#app')
