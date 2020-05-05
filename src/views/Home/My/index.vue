<template>
  <div class='my'>
    <div class="center-view">
      <div class="avatar">
        <img
          src="@/assets/icon/touxiang.png"
          class="avator-icon"
        >
        <div class="nick-name">立即登录</div>
      </div>
      <ul class="my-order-tab">
        <li>
          <img
            src="@/assets/icon/filmdingdan.png"
            width="26px"
            height="26px"
          >
          <span
            class="mint-badge is-primary is-size-small"
            style="display: none;"
          >99+
          </span>
          <div class="common-p">电影订单</div>
        </li>
        <li>
          <img
            src="@/assets/icon/shangpindingdan.png"
            width="26px"
            height="26px"
          >
          <div class="common-p">商品订单</div>
        </li>
      </ul>
      <!---->
      <div class="margin-set my-card">
        <img
          src="@/assets/icon/quan.png"
          width="20px"
          height="20px"
          alt=""
        >
        <span class="label">卖座券</span>
        <img
          src="@/assets/icon/youjiantou.png"
          class="arrow"
        >
      </div>
      <div class="margin-set my-card">
        <img
          src="@/assets/icon/hongbao.png"
          width="20px"
          height="20px"
        >
        <span class="label">组合红包</span>
        <img
          src="@/assets/icon/youjiantou.png"
          class="arrow"
        >
      </div>
      <div class="margin-set my-balance"><img
          src="@/assets/icon/yue.png"
          width="20px"
          height="20px"
        >
        <span class="label">余额</span>
        <span class="value">
          <span class="price-decimal price-fmt">
            <i>￥</i>
            <span
              class="interge"
              style="font-size: 15px;"
            >0</span>
            <span style="display: none;">.</span>
            <span
              class="decimal"
              style="font-size: 10px;"
            ></span>
            <span style="display: none;">.</span>
            <span
              class="decimal"
              style="font-size: 10px; display: none;"
            >00</span>
          </span>
        </span>
        <img
          src="@/assets/icon/youjiantou.png"
          class="arrow"
        >
      </div>
      <div class="margin-set system-set">
        <img
          src="@/assets/icon/shezhi.png"
          width="20px"
          height="20px"
        >
        <span class="label">设置</span>
        <img
          src="@/assets/icon/youjiantou.png"
          class="arrow"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/mixins.scss';
.my {
  flex: 1;
  overflow-y: auto;
  .center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
    .avatar {
      text-align: center;
      margin-top: -44px;
      height: 150px;
      padding-left: 22px;
      padding-top: 64px;
      background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
      background-size: cover;
      display: flex;
      align-items: center;
      color: #fff;
      .avator-icon {
        width: 63px;
        height: 63px;
        border-radius: 35px;
        margin-right: 20px;
        border: 2px solid #fff;
      }
      .nick-name {
        font-size: 16px;
      }
    }

    .my-order-tab {
      width: 100%;
      margin: 0 auto;
      display: flex;
      text-align: center;
      font-size: 13px;
      padding: 0;
      height: 79px;
      background: #fff;
      margin-bottom: 10px;
      align-items: center;
      li {
        position: relative;
        flex: 1;
        list-style: none;
        .common-p {
          color: #797d82;
        }
        img {
          width: 26px;
          height: 26px;
        }
      }
    }

    .my-card,
    .my-balance {
      img {
        width: 20px;
        height: 20px;
      }

      .value {
        text-align: right;
        color: #797d82;
        padding-right: 14px;
        .price-decimal {
          color: #797d82;
        }
        .price-fmt {
          font-size: 15px;
          height: 0 !important;
          display: inline-table !important;
          i {
            font-size: 11px;
            font-style: normal;
          }
        }
      }
    }
    .margin-set {
      position: relative;
      @include border-bottom;
      background: #fff;
      padding: 0 15px;
      height: 49px;
      display: flex;
      align-items: center;
      .label {
        margin-left: 15px;
        color: #191a1b;
        flex: 1;
      }
      .arrow {
        text-align: right;
        width: 6px;
        height: 10px;
      }
    }
  }
}
</style>
