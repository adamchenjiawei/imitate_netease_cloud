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
    height: 40px;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(#c20c0c));
    border-bottom: 1px solid #600000;
  }
  nav div {
    display: inline-block;
    margin-left: 20px;
    padding: 8px;
    width: 50px;
    height: 24px;
    color: #fff;
  }
  nav div:hover {
    background-color: #c20c0c;
  }
</style>
<script>

  export default {
  }
</script>
