<template>
  <div class='films'>
    <div class='filmshead'>
      <!-- 轮播图begin -->
      <Swiper
        class='mySwiper'
        v-if='bannerList.length>0'
      >
        <SwiperItem
          v-for='item in bannerList'
          :key='item.id'
        ><img :src='item.imageurl' /></SwiperItem>
      </Swiper>
      <!-- 轮播图end -->

      <tabsBar></tabsBar>
    </div>

    <router-view />
  </div>
</template>

<script>
// 引入swiper核心与样式
import { Swiper, SwiperItem } from '@/components/Swiper'
import tabsBar from './components/tabsBar'
import { getBanner } from '@/api/films'

export default {
  name: 'Films',
  components: {
    Swiper,
    SwiperItem,
    tabsBar
  },
  data () {
    return {
      bannerList: []
    }
  },
  created () {
    getBanner().then(res => {
      // console.log(res.info)
      if (res.code === 200) {
        console.log(res.info)
        this.bannerList = res.info
      } else {
        alert('数据请求错误')
      }
    }).catch(err => {
      console.log(err)
      alert('网络有延迟')
    })
  }
}
</script>

<style lang='scss'>
.films {
  height: 100%;
  display: flex;
  flex-direction: column;

  .now {
    flex: 1;
    overflow-y: auto;
  }
}

// .tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
//   color: #ff5f16;
// }

// .tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper {
//   position: absolute;
//   margin: auto;
//   top: 30px;
//   left: 0;
//   -webkit-transform: translateZ(0);
//   transform: translateZ(0);
//   transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
//   .tab-ink-bar {
//     border-bottom: 2px solid #ff5f16;
//     border-radius: 20px;
//     display: block;
//     margin: auto;
//   }
// }
</style>
