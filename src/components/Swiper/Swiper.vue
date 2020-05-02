<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',
  mounted () {
    // console.log(this.$refs.swiper)
    console.log(this.$el)
    var mySwiper = new Swiper(this.$el, {  // eslint-disable-line
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang='scss'>
@import '@/assets/styles/mixins.scss';

.swiper-container {
  width: 100%;
  height: 193px;
  --swiper-pagination-color: #ff0000;
  @include border-bottom;
  img {
    width: 100%;
  }
}
</style>
