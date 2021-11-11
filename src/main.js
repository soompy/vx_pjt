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
import "intersection-observer";
import scrollama from "scrollama";
import Scrollspy from 'vue2-scrollspy';
import scrollSpy, { Easing } from 'vue2-scrollspy';
import VueTyperPlugin from 'vue-typer'

// css 
import './assets/scss/index.scss'
import 'swiper/css/swiper.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
Vue.use(Scrollspy);
Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
});
Vue.use(VueTyperPlugin)


new Vue({
  router,
  store,
  vuetify,
  scrollama,
  render: h => h(App)
}).$mount('#app')
