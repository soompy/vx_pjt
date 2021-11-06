<template>
  <div>
    <h2>메인홈</h2>

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
export default {
  name: "MainHome",

  components: {},
  mounted() {
    import("aos").then((AOS) => AOS.init());
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
