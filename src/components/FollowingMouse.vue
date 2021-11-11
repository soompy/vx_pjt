<template>
    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
        <div :style="cursorCircle" class="g-cursor__circle"></div>
        <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>

         <vue-typer class="display-3"
                   :text='["안녕하세요.","브이엑스","카카오"]'
                   :repeat='Infinity'
                   initial-action='typing'
                   :pre-type-delay='100'
                   :type-delay='200'
                   :pre-erase-delay='500'
                   :erase-delay='250'
                   erase-style='backspace'
                   :erase-on-complete='false'
                   caret-animation='blink'
        ></vue-typer>
    </div>
</template>

<script>

export default {
  name: "FollowingMouse",
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

    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    border-radius: 45%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
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
    // background: #fff;
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



