// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <main id="app">
      <nav class="navbar navbar-expand-lg bg-light">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/introduction" class="nav-link">Introduction</router-link></li>
          <li class="nav-item"><router-link to="/grammar" class="nav-link">Grammar Notes</router-link></li>
          <li class="nav-item"><router-link to="/references" class="nav-link">References</router-link>
        </ul>
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  `
}).$mount('#app')
