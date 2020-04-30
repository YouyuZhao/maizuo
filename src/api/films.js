// 专门处理电影相关的接口请求

// 引入封装好的axios
import request from '@/utils/request'

// 一个接口暴露一个函数
// 获取电影列表
export const getFilms = () => {
  // return 的是接口调用之后axios返回的promise对象
  return request({
    url: '/mhd/comic_v2/customerview',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web - app',
      viewtype: 1
    }
  })
}

// 获取banner列表
export const getBanner = () => {
  // return 的是接口调用之后axios返回的promise对象
  return request({
    url: '/mhd/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web - app',
      adgroupid: 123
    }
  })
}
