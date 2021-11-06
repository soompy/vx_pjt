<template>
  <div>
    <h2>메인홈</h2>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="dd" data-aos="fade-up">dfkjasklfjaskldfjkl</div>
    <div class="dd" data-aos="fade-in">asdkfjasdkl</div>
    <div class="dd" data-aos="fade-right">dddd</div>
    <div class="dd" data-aos="fade-left">dddd</div>
    <div class="dd" data-aos="fade-up-right">dddd</div>
    <div class="dd" data-aos="flip-left">dddd</div>
    <div class="dd" data-aos="zoom-in">dddd</div>
    <div class="dd" data-aos="fade-up" data-aos-duration="3000">이히히ㅣ</div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "MainHome",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  directives: {
    swiper: directive,
  },
  mounted() {
    import("aos").then((AOS) => AOS.init());
    this.swiper.slideTo(3, 1000, false);
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.dd {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 300px;
}
</style>
