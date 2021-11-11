<template>
  <div>
    <div class="wow">
      <h2>사업</h2>
      <ZoomScroll v-on:stateChange="scaleScroll($event)" class="kk">
        <!-- <img
          class="bc"
          src="https://w.namu.la/s/28027c57126faed6ad2426677a122ac53864e9fca93d64442af454a4bb397c3ac6467f258f151f0bb19b3c8b91609ae7cc8ab888a9b235670622ef1cb1fbc6df56bfd6011ccdef1401fb8ce52739c8e9fc85a22f858fdfd891e8b8522d4647c4"
        /> -->


      </ZoomScroll>

      <div class="fixed-scroll">
        <p>끝</p>
        <p>끝</p>
        <p>끝</p>
        <p>끝</p>
        <p>끝</p>
      </div>
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import ZoomScroll from "vue-zoom-scroll";

export default {
  name: "Recruit",
  components: {
    ZoomScroll,
    Scrollama,
  },
  props: {
    initialScale: Number,
    minScale: Number,
    zoomIntensity: Number,
    scrollDistance: Number,
  },
  data() {
    return {
      currTitle: null,
      slides: [
        {
          title: "Tiger",
        },
        {
          title: "Eagle",
        },
        {
          title: "Shark",
        },
      ],
      zoomScrollDetails: {
        initialScale: 3,
        minScale: 1,
        zoomIntensity: 50,
        scrollDistance: 1000,
      },
    };
  },
  methods: {
    scaleScroll(data) {
      this.zoomScrollDetails = data;
    },
  },
  mounted() {
    this.currTitle = this.slides[0].title;
  },

};
</script>

<style lang="scss" scoped>
.bc {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-image: none !important;
}
.wow {
  position: relative;
  .fixed-scroll {
    
    p {
      height: 60vh;
    }
  }
}


</style>