<template>
  <div class='now'>
    <ul class='now-films'>
      <li
        v-for='item in nowfilmsList'
        :key='item.bigbook_id'
      >
        <a>
          <div class='nowImg'>
            <img :src='item.coverurl' />
          </div>
          <div class='nowInfo'>
            <p class='p1'>{{item.bigbook_name}}</p>
            <p class='p2'>{{item.bigbook_author}}</p>
          </div>
          <div class='buy'>
            <button>购买</button>
          </div>
        </a>
      </li>
    </ul>
    <div class='nomore'>-无更多电影-</div>
  </div>
</template>

<script>
import { getFilms } from '@/api/films'
export default {
  name: 'Now',

  data () {
    return {
      nowfilmsList: []
    }
  },

  created () {
    // https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
    getFilms().then(res => {
      if (res.code === 200) {
        // ok
        console.log(res)
        console.log(res.info[0].comicslist)
        this.nowfilmsList = res.info[0].comicslist
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
.now {
  .now-films li {
    box-sizing: border-box;
    padding: 15px;
    a {
      justify-content: center;
      align-items: center;
      height: 124px;
      width: 100%;
      display: flex;
      flex-direction: row;
      background: #fff;
      .nowImg {
        width: 66px;
        height: 90.83px;
        img {
          width: 100%;
        }
      }
      .nowInfo {
        width: 230px;
        height: 81px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 10px;
        .p1 {
          font-size: 16px;
          color: #191a1b;
          line-height: 30px;
        }
        .p2 {
          font-size: 14px;
          color: #797d82;
          line-height:20px;
        }
      }
    }
  }
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
