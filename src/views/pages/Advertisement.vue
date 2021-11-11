<template>
  <div id="app">
    <div class="intro">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, at
        velit sint facere ipsam doloremque placeat vel impedit sapiente alias.
      </p>
      <p>SCROLL TO CONTINUE</p>
    </div>

    <div class="main">
      <div class="main__graphic">{{ currStep }}</div>
      <Scrollama
        :debug="true"
        :offset="0.5"
        @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
      >
        <div class="step" data-step-no="1">step 1</div>
        <div class="step" data-step-no="2">step 2</div>
        <div class="step" data-step-no="3">step 3</div>
        <div class="step" data-step-no="4">step 4</div>
      </Scrollama>
    </div>

    <div class="outro">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, at velit
      sint facere ipsam doloremque placeat vel impedit sapiente alias.
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertisement",
  data() {
    return {
      currStep: null,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.intro,
.outro {
  padding: 20vh;
}

.main__graphic {
  position: sticky;
  top: 0;
  height: 50vh;
  border: 1px solid #ccc;
  background-color: #eee;
  font-size: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step {
  padding: 15vh 0;
  width: 50%;
  margin: 0 auto 30vh;
  background-color: beige;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
