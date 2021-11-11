<template>
  <div class="wow">
    <!-- <section class="card-wrap">
      <ul id="v-for-object" class="demo">
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
    </section> -->


      <ZoomScroll v-on:stateChange="scaleScroll($event)" backgroundImage="">
        <div class="cover">
          <div class="bg">
            <div class="text-box">
              <h2 class="title">제목</h2>
              <p class="content">콘텐츠</p>
            </div>
          </div>
        </div>
      </ZoomScroll>

      <div class="fixed-scroll">
        <p style="color: #fff;">
          What is Lorem Ipsum? <br>
Lorem Ipsum is simply dummy text of the printing and <br>typesetting industry. Lorem Ipsum has been the industry's <br>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and <br>scrambled it to make a type specimen book. <br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?<br>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at<br> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
Where does it come from?<br>
가가가가가 <br>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, <br>making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more <br>obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 <br>from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact origv<br>inal form, accompanied by English versions from the 1914 translation by H. Rackham.
Where can I get some?<br>
There are many 가가가가가 <br>variations of passages of Lorem Ipsum available, but the majority have suffe<br>red alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure<br> there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
가가가가가 <br> 텍스트  넥스트레벨
        </p>
      </div>


      <ZoomScroll initialScale="3" minScale="1" zoomDirection="out" zoomIntensity="100" backgroundImage="https://cdn.quv.kr/yyn2or23z/up/6048760b86812_1920.png">
        <div class="cover">
          <div class="bg">
            <div class="text-box">
              <h2 class="title">제목</h2>
              <p class="content">콘텐츠</p>
              <p class="content">콘텐츠</p>
              <p class="content">콘텐츠</p>
              <p class="content">콘텐츠</p>
              <p class="content">콘텐츠</p>
            </div>
          </div>
        </div>
      </ZoomScroll>


      <div class="fixed-scroll">
        <p>끝</p>
        <p>끝</p>
        <p>끝</p>
      </div>
    </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import ZoomScroll from "vue-zoom-scroll";
// import CardList from '../../components/list/cardList.vue';

export default {
  name: "Test1",
  components: {
    ZoomScroll,
    Scrollama,
    // CardList,
  },
  props: {
    initialScale: Number,
    minScale: Number,
    zoomIntensity: Number,
    scrollDistance: Number,
    zoomDirection: String,
    backgroundImage: String,
  },
  data() {
    return {
       myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
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
        minScale: 1,
        zoomIntensity: 50,
        scrollDistance: 1000,
        zoomDirection: out,
        
      },
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
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
.card-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 33%;
  white-space: nowrap;
}
.wow {
  position: relative;
  .fixed-scroll {
    background-attachment: scroll;
    position: sticky;
    left: 0%;
    top: 0%;
    p {
      
      height: 100vh;
      font-size: 30px;
      background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrMEiresoeXDvXKWy9M4zgRsWKVhXeDr5Fg&usqp=CAU') center center no-repeat;
      background-size: cover;
    }
  }
}

.zoom-scroll__bg {
  overflow: hidden;
  height: 100vh;
  .cover {
    width: 100%;
    height: 100%;
    // background: #fff;
    .bg {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      background-attachment: fixed;
      .title {
        font-size: 30px;
      }
      .content {
        font-size: 20px;
      }
      .text-box {
        // background-attachment: fixed;
      }
    }
  }
}
</style>