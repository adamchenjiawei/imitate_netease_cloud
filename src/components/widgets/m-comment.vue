<template>
  <div class="m-comment">
    <div class="avatar">
      <avatar username="Adam" :src="comment.avatar"></avatar>
    </div>
    <div class="comment">
      <p>{{comment.name}}：</p>
      <p>{{comment.content}}</p>
      <div>
        <span class="comment-time">2017年03月09日</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .m-comment {
    border-top: 1px dotted #cccccc;
    margin-top: 30px;
    padding-top: 20px;
  }
  .avatar {
    display: inline-block;
    float: left;
    margin-top: 5px;
  }
  .comment {
    margin-left: 70px;
  }
  .comment p {
    font-size: 14px;
    margin: 0;
  }
  .comment p:first-child {
    color: #0074D9;
  }
  .comment-time {
    float: right;
    font-size: 14px;
  }
</style>
<script>
  import Avatar from 'vue-avatar/dist/Avatar'
  export default {
    components: {
      Avatar
    },
    props: {
      comment: {
        type: Object
      }
    }
  }
</script>
