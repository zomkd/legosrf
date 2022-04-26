import Vue from 'vue'
import App from './App.vue'
import { AccordionMenu } from 'vue-accordion-menu'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  Lazy,
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.min.css'

Vue.config.productionTip = false

import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";
Vue.use(VueModalTor);

Vue.component('AccordionMenu', AccordionMenu)


Vue.use(getAwesomeSwiper(SwiperClass))
SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, Lazy])


new Vue({
  render: (h) => h(App),
}).$mount('#app')
