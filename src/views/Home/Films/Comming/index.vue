<template>
  <div class='comming'>
    <Films
      v-for='item in commingfilmsList'
      :key='item.bigbook_id'
      :filmsList='item'
    ></Films>
    <div class='nomore'>-无更多电影-</div>
  </div>
</template>

<script>
// 引入相关接口
import { getFilms } from '@/api/films'
// 引入组件
import Films from '@/components/Films'

export default {
  name: 'Comming',
  components: {
    Films
  },
  data () {
    return {
      commingfilmsList: []
    }
  },

  created () {
    // https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
    getFilms().then(res => {
      if (res.code === 200) {
        // ok
        console.log(res)
        console.log(res.info[1].comicslist)
        this.commingfilmsList = res.info[1].comicslist
      } else {
        alert('请求错误')
      }
    }).catch(err => {
      alert('网络异常，请稍后重试')
      console.log(err)
    })
  }
}
</script>

<style lang='scss' scoped>
.comming {
  overflow-y: auto;
  flex: 1;
  .nomore {
    height: 59px;
    background-color: #ededed;
    color: #bdc0c5;
    font-size: 13px;
    text-align: center;
    margin: auto;
    line-height: 59px;
  }
  .buy button {
    background: #fff;
    border: 1px solid #ff5f16;
    color: #ff5f16;
  }
}
</style>
