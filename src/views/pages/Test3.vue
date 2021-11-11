<template>
  <div id="app">
    <section id="visual">
      <following-mouse></following-mouse>
    </section>
  </div>
</template>

<script>
import FollowingMouse from '../../components/FollowingMouse.vue';

export default {
  name: "Test3",
  data() {
    return {
      Child: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    };
  },
  components: {
    FollowingMouse
    
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  mounted() {
    import("aos").then((AOS) => AOS.init());
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    move(event){
          this.x =  event.clientX;
          this.y =  event.clientY;
          this.coordinates.left = event.clientX + "px";
          this.coordinates.top = event.clientY + "px";
          this.coordinates.opacity = "0%;"
      },
      set(event){
          this.coordinates.left = event.clientX + "px";
          this.coordinates.top = event.clientY + "px";
          this.coordinates.opacity = "100%;"
      },
      moveCursor(e) {
        this.xChild = e.clientX;
        this.yChild = e.clientY;
        setTimeout(() => {
          this.xParent = e.clientX - 15;
          this.yParent = e.clientY - 15;
        }, 100);
      },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });
  },
};
</script>

<style lang="scss" scoped>
  .glass {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 70px;
    transform: translateY(-50%);
    border-radius: 45%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }

  .bubbleMenuContainer{
      position: absolute;
      border-radius: 100px;
      background-color: lightcoral;
      width: 30px;
      height: 30px;
      padding: 10px;
  }

  .g-cursor_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }
  .g-cursor__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }
  .g-cursor__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #fff;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
  }
  .g-cursor_hover .g-cursor__circle {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }
</style>
