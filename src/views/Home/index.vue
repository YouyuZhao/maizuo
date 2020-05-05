<template>
  <div class='home'>
    <router-view />

    <ul class="nav-bar">
      <li class="films">
        <router-link to='/home/films'>
          <img src="../../assets/icon/films.png">
          <span>电影</span>
        </router-link>
      </li>
      <li class="cinemas">
        <router-link to='/home/cinemas'>
          <img src="../../assets/icon/cinemas.png">
          <span>影院</span>
        </router-link>
      </li>
      <li class="uugroupon">
        <a href="https://m.maizuo.com/uriredirect/">
          <img src="../../assets/icon/zixun.png">
          <span>资讯</span>
        </a>
      </li>
      <li class="center">
        <router-link to='/home/my'>
          <img src="../../assets/icon/my.png">
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .films {
    flex: 1;
    overflow-y: auto;
  }
  .nav-bar {
    position: relative;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #ededed;
      color: #ededed;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
    // position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    z-index: 100;
    background: #fff;
    list-style: none;
    li {
      width: 25%;
      text-align: center;
      img {
        width: 21px;
        height: 21px;
        padding-top: 8px;
      }
      a {
        width: 100%;
        height: 49px;
        float: left;
        line-height: 28px;
        position: relative;
        color: #797d82;
        span {
          position: absolute;
          font-size: 10px;
          line-height: 12px;
          word-break: keep-all;
          color: #797d82;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
.nav-bar {
  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #ededed;
    color: #ededed;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
  // position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fff;
  list-style: none;
  li {
    width: 25%;
    text-align: center;
    img {
      width: 21px;
      height: 21px;
      padding-top: 8px;
    }
    a {
      width: 100%;
      height: 49px;
      float: left;
      line-height: 28px;
      position: relative;
      color: #797d82;
      span {
        position: absolute;
        font-size: 10px;
        line-height: 12px;
        word-break: keep-all;
        color: #797d82;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
