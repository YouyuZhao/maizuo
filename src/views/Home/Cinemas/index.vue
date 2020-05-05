<template>
  <div class='cinemas'>
    <header class="header">
      <div class="left">
        <div class="city">
          <span>上海</span>
          <i class='iconfont icon-jiantou9'></i>
        </div>
      </div>
      <div class="title">
        <div>影院</div>
      </div>
      <div class="right">
        <div class="toCinemaSearch">
          <i class='iconfont icon-search'></i>
        </div>
      </div>
    </header>

    <div class="cinema-list-tag">
      <div class="cinema-list-tag-name">
        <label class="">
          全城
          <i
            class='iconfont icon-shangjiantou'
            style='display:none'
          ></i>
          <i class='iconfont icon-jiantou9'></i>
        </label>
        <label class="">
          APP订票
          <i
            class='iconfont icon-shangjiantou'
            style='display:none'
          ></i>
          <i class='iconfont icon-jiantou9'></i>
        </label>
        <label class="">
          最近去过
          <i
            class='iconfont icon-shangjiantou'
            style='display:none'
          ></i>
          <i class='iconfont icon-jiantou9'></i>
        </label>
      </div>
    </div>

    <div class='cinemas-main'>
      <div class="cinema-banner-wrap">
        <ul class="cinema-list">
          <li class="cinema-banner-item">
            <div class="name">
              <span class="title">【上海】SFC上影影城电影兑换券</span>
              <span class="icon">影院券</span>
            </div>
            <div class="type">【上海】SFC上影影城电影兑换券</div>
          </li>
        </ul>
      </div>

      <div class='cinema-list-wrap'>
        <ul class='cinema-list'>
          <li class="cinema-list-item">
            <router-link
              to="/film"
              class="cinema-item-wrap"
            >
              <div class="cinema-info-lf cinema-info">
                <span class="cinema-name">SFC上影影城（新世界店）</span>
                <img
                  src=""
                  alt="去过"
                  class="isVisted"
                  style="display: none;"
                >
                <span class="cinema-address">上海市黄浦区南京西路2-68号新世界12楼</span>
              </div>
              <div class="cinema-info-rt cinema-info">
                <div class="">
                  <span class="cinema-lowPrice price-fmt"><i>￥</i>
                    <span
                      class="interge"
                      style="font-size: 15px;"
                    >14</span>
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
                  <span class="upon">起</span>
                </div>
                <span class="cinema-gpsAddress">
                  <img
                    src=""
                    alt="距离"
                    style="display: none;"
                  >
                  <strong>距离未知</strong>
                </span>
              </div>
            </router-link>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cinemas'
}
</script>

<style lang='scss' scoped>
// 引入公共的mixin
@import '@/assets/styles/mixins.scss';

.cinemas {
  flex: 1;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }

  header {
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: flex;
    justify-content: center;

    div {
      height: 44px;
    }

    .left {
      font-size: 12px;
      min-width: 15%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 15px;
      i {
        font-size: 10px;
        color: #191a1b;
      }
    }

    .title {
      font-size: 17px;
      color: #191a1b;
      flex: 1;
      overflow: hidden;
      div {
        color: #191a1b;
        text-align: center;
      }
    }

    .right {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      div {
        width: 100%;
        text-align: right;
        i {
          font-size: 20px;
          color: #191a1b;
        }
      }
    }
    // @include border-bottom;
  }

  .cinema-list-tag {
    height: 50px;
    width: 100%;
    position: relative;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
    @include border-bottom;

    .cinema-list-tag-name {
      // position: relative;
      label {
        float: left;
        width: 33.3%;
        line-height: 49px;
        font-size: 14px;
        color: #191a1b;
        letter-spacing: -0.2px;
        i {
          font-size: 10px;
        }
      }
    }
  }

  .cinemas-main {
    flex: 1;
    overflow-y: auto;
    .cinema-banner-wrap {
      // flex: 1;
      // overflow-y: auto;
      .cinema-list {
        position: relative;
        @include border-bottom;
        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 15px;
          background-color: #fff;
          .name {
            font-size: 15px;
            color: #18191a;
            position: relative;
            .icon {
              color: #ffb245;
              margin-left: 7px;
              font-size: 10px;
              padding: 4px 6px;
              text-align: center;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              &:after {
                content: ' ';
                transform: scale(0.5);
                position: absolute;
                border: 1px solid #ffb245;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
                border-radius: 4px;
              }
            }
          }
          .type {
            margin-top: 10px;
            font-size: 13px;
            color: #797d82;
          }
        }
      }
    }

    .cinema-list-wrap {
      z-index: 100;
      .cinema-list {
        li {
          position: relative;
          background-color: #fff;
          padding: 15px;
          @include border-bottom;
          .cinema-item-wrap {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .cinema-info-lf {
              width: calc(100% - 65px);
              text-align: left;
              padding-right: 15px;
              float: left;
              span {
                display: block;
                max-width: 80%;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                float: left;
              }
              .cinema-name {
                color: #191a1b;
                font-size: 15px;
                float: left;
              }
              .isVisted {
                width: 32px;
                height: 16.5px;
                margin-bottom: -6px;
                margin-left: 4px;
              }
              .cinema-address {
                color: #797d82;
                font-size: 12px;
                margin-top: 5px;
              }
            }

            .cinema-info-rt {
              width: 70px;
              text-align: center;
              float: right;
              margin-right: -5px;
              .price-fmt {
                font-size: 15px;
                color: #ff5f16;
                height: 0 !important;
                display: inline-table !important;
                float: none !important;
                i {
                  font-size: 11px;
                  font-style: normal;
                }
                span {
                  float: none !important;
                }
              }
              .upon {
                color: #ff5f16;
                font-size: 10px;
              }
              .cinema-gpsAddress {
                display: block;
                font-size: 11px;
                color: #797d82;
                margin-top: 5px;
                strong {
                  font-weight: 400;
                  display: block;
                  margin-top: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
