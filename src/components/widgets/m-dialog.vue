<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="show">
        <div @click="hideOnBlur" class="dialog-mask"></div>
        <div class="dialog-content"
             :style="{width: width,borderRadius: radius, backgroundColor: bgColor}">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

.dialog-mask {
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 9;
background: rgba(0, 0, 0, .6);
}

.dialog-content {
position: fixed;
z-index: 10;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
overflow: visible;
}

.fade-enter-active, .fade-leave-active {
transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
opacity: 0;
}
</style>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '85%'
      },
      radius: {
        type: String,
        default: '0.05rem'
      },
      bgColor: {
        type: String,
        default: '#fafafc'
      }
    },
    methods: {
      hideOnBlur () {
        this.$parent.$emit('on-hide')
      }
    }
  }

</script>

