<template>
  <div class='now'>
    <h1>正在热映</h1>
  </div>
</template>

<script>
export default {
  name: 'Now',
  created () {
    // https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
    fetch('/mhd/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1').then(response => response.json()).then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
</style>
