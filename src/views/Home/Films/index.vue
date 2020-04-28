<template>
  <div class='films'>
    <div class="tabs-bar-wrapper">
      <div class="tabs-bar">
        <ul class="tabs-nav">
          <li
            class=""
            style="width: 50%;"
          ><span>正在热映</span></li>
          <li
            class="active"
            style="width: 50%;"
          ><span>即将上映</span></li>
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

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Films'
}
</script>

<style lang='scss'>
.tabs-bar-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  a {
    text-decoration: none;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .tabs-bar {
    height: 49px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
      -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    position: relative;
    .tabs-nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      display: -webkit-flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      width: 100%;
    }
  }
  .tabs-bar:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

.tabs-bar-wrapper .tabs-bar .tabs-nav li {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  color: #191a1b;
  text-align: center;
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
// .tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
//   color: #ff5f16;
// }
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper {
  position: absolute;
  margin: auto;
  top: 30px;
  left: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
// .tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper .tab-ink-bar {
//   border-bottom: 2px solid #ff5f16;
//   border-radius: 20px;
//   display: block;
//   margin: auto;
// }
</style>
