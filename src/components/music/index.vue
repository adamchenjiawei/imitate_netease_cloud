<template>
  <div>
    <div class="heard">

    </div>
    <div class="container">
      <div class="music-info">
        <div class="cover">
          <span class="msk"></span>
          <img src="../../assets/cover.jpeg"/>
          <audio src="http://oibzvf99m.bkt.clouddn.com/test_music.mp3"></audio>
        </div>
        <div class="info">
          <div class="title">
            <i class="tag"></i>
            <div class="title-desc">
              <h1 class="music-title">なんでもないや (movie ver.)</h1>
              <p class="desc">动画电影《你的名字。》ED</p>
            </div>
          </div>
          <div class="singer">
            <p>歌手: RADWIMPS</p>
            <p>所属专辑：君の名は。</p>
          </div>

          <div class="control">
            <input type="button" @click="playMusic" class="play-music" value="播放">
          </div>
          <div class="lyrics">
            <p>
              二人の間 通り過ぎた風は
              <br/>
              掠过两人之间的风
              <br/>
              どこから寂しさを運んできたの
              <br/>
              捎来不知来处的寂寞
              <br/>
              泣いたりしたそのあとの空は
              <br/>
              哭泣过后眺望的天空
              <br/>
              やけに透き通っていたりしたんだ
              <br/>
              有种格外的通透
              <br/>
              いつもは尖ってた父の言葉が
              <br/>
              平日里刺耳的父亲的话语
              <br/>
              今日は暖かく感じました
              <br/>
              今天却倍感温暖
            </p>
          </div>
        </div>
      </div>

      <section class="music-comment">

      </section>
    </div>

  </div>
</template>
<style scoped>
  .heard {
    width: 100%;
    height: 30px;
    background-color: red;
    position: fixed;
    top: 0;
  }
  .title {
    display: inline-block;
  }
  .title-desc {
    float: right;
  }
  .desc {
    text-align: left;
    position: relative;
    bottom: 25px;
  }
  .cover {
    width: 28%;
    height: 20px;
    float: left;
    position: absolute;
  }
  .cover img {
    top: 48px;
    position: absolute;
    left: 48px;
    z-index: -1;
  }
  .info {
    width: 69%;
    float: right;
  }
  .singer {
    text-align: left;
    margin-left: 65px;
  }
  .tag {
    width: 54px;
    height: 24px;
    background: url('../../assets/icon.png');
    display: inline-block;
    float: left;
    margin-top: 30px;
  }
  .music-info {
  }
  .music-title {
    text-align: left;
  }
  .lyrics {
    text-align: left;
    margin-left: 60px;
  }
  .control {
    text-align: left;
    margin-left: 60px;
  }
  .msk {
    width: 206px;
    height: 205px;
    background-position: -140px -580px;
    background-image: url(../../assets/coverall.png);
    position: absolute;
    top: 10px;
    left: 10px;
  }
</style>

<script>
  export default {
    methods: {
      playMusic () {
        const audio = document.getElementsByTagName('audio')[0]
        const playButton = document.getElementsByClassName('play-music')[0]
        if (audio.paused) {
          audio.play()
          playButton.setAttribute('value', '暂停')
        } else {
          audio.pause()
          playButton.setAttribute('value', '播放')
        }
      }
    }
  }
</script>
