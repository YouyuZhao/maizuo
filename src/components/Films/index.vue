<template>
  <div class='common-films'>
    <ul class='comming-films'>
      <li>
        <a>
          <div class='commingImg'>
            <img :src='filmsList.coverurl' />
          </div>
          <div class='commingInfo'>
            <p class='p1'>{{filmsList.bigbook_name}}</p>
            <p class='p2'>作者：{{filmsList.bigbook_author}}</p>
          </div>
          <div class='buy'>
            <button>购买</button>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Films',
  props: {
    filmsList: {
      //   type: Object,
      default: true
    }
  }
}
</script>

<style lang='scss' scoped>
// 引入公共的mixin
@import '@/assets/styles/mixins.scss';

.comming-films li {
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  @include border-bottom;

  a {
    justify-content: center;
    align-items: center;
    height: 124px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #fff;
    .buy button {
      background: #fff;
      border: 1px solid #ff5f16;
      color: #ff5f16;
    }
    .commingImg {
      width: 66px;
      height: 90.83px;
      img {
        width: 100%;
      }
    }
    .commingInfo {
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
        line-height: 20px;
      }
    }
  }
}
</style>
