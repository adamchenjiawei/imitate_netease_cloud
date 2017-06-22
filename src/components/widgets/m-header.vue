<template>
  <div class="header">
    <nav>
      <div>推荐</div>
      <div>排行榜</div>
      <div>播放</div>
      <div>歌单</div>
      <div>歌手</div>
    </nav>
  </div>
</template>
<style scoped>
  .header {
    height: 0.4rem;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(#c20c0c));
    border-bottom: 1px solid #600000;
  }
  nav {
    justify-content: center;
    display: flex;
  }
  nav div {
    font-size: 0.12rem;
    display: inline-block;
    padding: 0.08rem;
    width: 0.53rem;
    height: 0.24rem;
    color: #fff;
    float: left;
  }
  nav div:hover {
    background-color: #c20c0c;
  }
</style>
<script>

  export default {
  }
</script>
