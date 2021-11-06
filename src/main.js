import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'aos/dist/aos.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// css 
import './assets/scss/index.scss'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
