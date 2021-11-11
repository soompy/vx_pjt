<template>
  <div id="app">
    <div class="cover">
      <!-- <img width="25%" src="./assets/logo.png" /> -->
      <h2>회사소개 Scroll to continue</h2>
    </div>

    <div class="photo-container">
      <figure
        v-for="slide in slides"
        :key="slide.title"
        class="photo"
        :class="{ active: currTitle == slide.title }"
      >
        <img
          :src="slide.bgUrl"
          :alt="slide.title"
        />
      </figure>
    </div>
    <Scrollama
      :offset="0.9"
      @step-enter="({ element }) => (currTitle = element.dataset.title)"
      class="slides"
    >
      <div
        class="slide"
        v-for="slide in slides"
        :key="slide.title"
        :data-title="slide.title"
      >
        <h2>{{ slide.title }}</h2>
        <p>
          {{ slide.content }}
        </p>
      </div>
    </Scrollama>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";





export default {
  name: "Company",
  components: {
    Scrollama,
  },
  data() {
    return {
      currTitle: null,
      slides: [
        {
          title: "Tiger",
          bgUrl: "https://d1e00ek4ebabms.cloudfront.net/production/6b7c24d0-28a7-4942-9460-5e57eb9742c0.jpg",
          content: "1번",
        },
        {
          title: "Eagle",
          bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn6H6bAp2WCj2gW5Wvp3uE3eBjYYH0LRI_A&usqp=CAU",
          content: "2번",
        },
        {
          title: "Shark",
          bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73Ch_gvq4FA_uYhE93AvHEQI-5I6Jk95d7A&usqp=CAU",
          content: "3번",
        },
      ],
    };
  },
  mounted() {
    this.currTitle = this.slides[0].title;
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cover {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.photo-container {
  height: 100vh;
  background-color: beige;
  position: sticky;
  top: 0;
}
figure {
  position: absolute;
  margin: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: opacity 800ms;
}
figure img {
  min-width: 100%;
  min-height: 100%;
}
figure.active {
  visibility: visible;
  opacity: 1;
}
.slides {
  z-index: 10;
  position: relative;
}
.slide {
  height: 100vh;
  margin: 0 auto;
  max-width: 300px;
  color: white;
}
</style>