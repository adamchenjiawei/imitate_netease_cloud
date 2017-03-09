<template>
  <div class="music">
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
        <div class="comment-title">
          <h3>评论</h3>
          <span>共20条评论</span>
        </div>
        <div v-for="comment in comments">
          <m-comment :comment="comment" ></m-comment>
        </div>
      </section>
    </div>

  </div>
</template>
<style scoped>
  .music {
    width: 60%;
    margin: auto;
    border-right: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 30px;
    background-color: #fff;
  }
  .comment-title {
    border-bottom: 2px solid #c20c0c;
    height: 55px;
  }
  .comment-title h3 {
    float: left;
  }
  .comment-title span {
    float: left;
    margin: 24px 0 0 6px;
    font-size: 14px;
  }
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
    top: 44px;
    position: absolute;
    left: 46px;
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
    background: url(../../assets/coverall.png) no-repeat;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
  }
  .music-comment {
    text-align: left;
    margin:0 20px;
    clear: both;
  }
</style>

<script>
  import $ from 'jquery'
  import MComment from '../../components/widgets/m-comment.vue'
  export default {
    data () {
      return {
        comments: [
          {
            content: '我喜欢你, 笨蛋你这样我怎么知道你叫什么啊',
            name: 'Adam',
            avatar: 'http://p4.music.126.net/bSVYguPwCF4VJMCbg7QbyA==/18826937604170833.jpg?param=50y50'
          },
          {
            content: '事实证明，还是女生追女生更厉害一点！！！',
            name: '安静的卡卡7',
            avatar: 'http://p4.music.126.net/DZY2LAwiw-5zygdrJW-WPw==/3434874329475421.jpg?param=50y50'
          },
          {
            content: '最后十分钟简直恐怖啊，刀都架在新海诚脖子上了，心里默念千万别是秒五，还好还好。。。哦？新海诚你还在啊！走吧走吧，你不用死了。',
            name: '爱青花的喵喵',
            avatar: 'http://p3.music.126.net/gGfoB-lpyegh_DNYO6LLKQ==/1396379772408935.jpg?param=50y50'
          },
          {
            content: '如果你能看到生命的尽头，你会有所改变么',
            name: '雅虎酱',
            avatar: 'http://p3.music.126.net/LLehdAcaH3Rj_gbVPa1upA==/18799449813536807.jpg?param=50y50'
          },
          {
            content: '看了很久了，情节到现在还历历在目只记得当时久久不离开直到人都走尽了',
            name: '桜雒',
            avatar: 'http://p4.music.126.net/_RyNH596ix92d5wDxpVXIg==/18572950418225844.jpg?param=50y50'
          }
        ]
      }
    },
    components: {
      MComment
    },
    methods: {
      playMusic () {
        const audio = $('audio')[0]
        const playButton = $('.play-music')[0]
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
