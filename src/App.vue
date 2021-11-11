<template>
  <v-app>
    <header id="header">
      <div class="inner">
        <h1 class="tit_logo">
          <a href="/"
            ><img
              src="data:image/jpeg;base64,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"
              alt="kakaoVX"
          /></a>
        </h1>
        <ul class="gnb">
          <li><a href="/advertisement">광고</a></li>
          <li><a href="/business">사업영역</a></li>
          <li><a href="/company">회사소개</a></li>
          <li><a href="/history">연혁</a></li>
          <li><a href="/recruit">채용</a></li>
          <li><a href="/test1">테스트1</a></li>
          <li><a href="/test2">테스트2</a></li>
          <li><a href="/test3">테스트3</a></li>
        </ul>
      </div>
    </header>

    <v-main>
      <router-view />
    </v-main>

    <footer id="footer">
      <h1>푸터</h1>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
