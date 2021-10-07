import Taro from "@tarojs/taro";

const host = 'http://192.168.50.10:8080/'

export function wxLogin(params) {
  return Taro.request({
    url: host + 'wxAppletLogin',
    method:"POST",
    data: params,
  })
}


export function noteSaveOrUpdate(params) {
  return Taro.request({
    url: host+'luckyShot/noteInfo/saveOrUpdate',
    header:{
      "Authorization":"Bearer " + Taro.getStorageSync('AUTH_TICKET')
    },
    method:"POST",
    data: params,
  })
}
