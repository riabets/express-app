var Vue = require('vue/dist/vue.js');

Vue.component('home-page', require('./components/HomePage.vue'));

const app = new Vue({
    el: '#app'
});