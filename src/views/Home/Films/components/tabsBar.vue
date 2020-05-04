<template>
  <div class="tabs-bar-wrapper">
    <div class="tabs-bar">
      <ul class="tabs-nav">
        <li
          class=""
          style="width: 50%;"
        >
          <router-link to='now'>
            <span>正在热映</span>
          </router-link>
        </li>
        <li
          class="active"
          style="width: 50%;"
        >
          <router-link to='comming'>
            <span>即将上映</span>
          </router-link>
        </li>
        <div
          class="tab-ink-bar-wrapper"
          style="transform: translate3d(100%, 0px, 0px); width: 50%;"
        ><span
            class="tab-ink-bar"
            style="width: 56px;"
          ></span></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsBar'
}
</script>

<style lang='scss' scoped>
// 引入公共的mixin
@import '@/assets/styles/mixins.scss';

.tabs-bar-wrapper {
  // position: relative;
  z-index: 100;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    a {
      text-decoration: none;
      color: #191a1b;
    }
  }
  .tabs-bar {
    height: 49px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    position: relative;
    @include border-bottom;
    .tabs-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      li {
        flex-shrink: 0;
        color: #191a1b;
        text-align: center;
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
