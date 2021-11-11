<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <ul
          class="menu"
          v-scroll-spy-active="{ class: 'customActive' }"
          v-scroll-spy-link
        >
          <li :key="item" v-for="item in titles" class="menu-item">
            <a>{{ item }}</a>
          </li>
        </ul>

        <div class="current-section">Section: {{ section }}</div>
      </div>

      <div class="main" v-scroll-spy="{ data: 'section' }">
        <div>
          <h1>2021</h1>
          <ol class="history-month-list motion-transition">
            <!-- [D] s: 210902 추가 -->
            <li class="history-month-item motion-transition">
              <p class="history-month-num">08</p>
              <p class="history-txt">세라지오 골프클럽 운영 대행 계약 체결</p>
            </li>
            <!-- [D] e: 210902 추가 -->
            <li class="history-month-item motion-transition">
              <p class="history-month-num">05</p>
              <p class="history-txt">스크린 연습장 프랜차이즈 ‘프렌즈 아카데미’ 론칭</p>
            </li>
            <li class="history-month-item motion-transition">
              <p class="history-month-num">02</p>
              <p class="history-txt">KLPGA ‘한진선프로’ 메인 후원 계약 체결</p>
            </li>
          </ol>
        </div>

        <div>
          <h1>2020</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2019</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>
        
        <div>
          <h1>2018</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2017</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2016</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2015</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2014</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2013</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>

        <div>
          <h1>2012</h1>
          <ol class="history-month-list motion-transition">
									<li class="history-month-item motion-transition">
										<p class="history-month-num">02</p>
										<p class="history-txt">스크린골프 브랜드 ‘티업(T-up)’ 론칭</p>
									</li>
								</ol>
        </div>
        
      </div>
    </div>

    <div class="container2">
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
    </div>
    <div class="container2">
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
      한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글한글 한글 한글
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      section: 0,
      titles: [
        "2021",
        "2021",
        "2021",
        "2021",
        "2021",
        "2021",
        "2021",
        "2021",
        "2021",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 30px;
  left: 10px;
  max-width: 230px;
  font-size: 18px;
}

.menu {
  padding: 0;
  list-style: none;
}

.current-section {
  padding-top: 50px;
}

.current-section input {
  max-width: 3em;
}

.menu-item {
  margin-bottom: 20px;
}

.menu-item a {
  cursor: pointer;
}

.main {
  margin-left: 300px;
  font-size: 25px;
}

.customActive {
  color: #178ce6;
  border-left: 1px solid #178ce6;
  padding-left: 5px;
  transition: all 0.5s;
}

.container2 {
  height: 100vh;
  padding: 50px 0;
}
</style>