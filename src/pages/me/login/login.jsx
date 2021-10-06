import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import {wxLogin} from '../../../common/http'
import './login.scss'

export default class Login extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  goLogin = (userInfo) => {
    //清除缓存
    Taro.clearStorageSync()

    // 登录
    Taro.login().then(res=>{
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      if (res.code) {
        const params = {
          code: res.code,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: userInfo.gender,//性别 0：未知、1：男、2：女
          province: userInfo.province,
          city: userInfo.city,
          country: userInfo.country,
          language: userInfo.language,
        };
        wxLogin(params).then(res => {
          console.log("登录结果：" + JSON.stringify(res))
          let data = res.data;
          if (data.code == 200) {
            // Taro.showToast({
            //   title: '登录成功',
            //   icon: 'success',
            //   duration: 2000
            // })
            // 存储token
            Taro.setStorageSync(
              'AUTH_TICKET',
              data.data.token
            )
            Taro.setStorageSync(
              'userInfo',
              data.data
            )
            Taro.navigateBack()
          } else {
            console.log("登录失败");
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    })
  }

  authorize = () => {
    const that = this;
    // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    Taro.getSetting().then(res=>{
      if (res.authSetting['scope.userInfo']) {
        console.log("已授权")
        return true;
      }else {
        console.log("未授权")
        Taro.authorize({
          scope: 'scope.userInfo'
        })
      }
    }).then(()=>{
      return Taro.getUserInfo();
    }).then(res=>{
      return that.goLogin(res.userInfo);
    })
  }

  render() {
    return (
      <View className='body'>
        <Button>暂不登录</Button>
        <Button onClick={this.authorize.bind(this)}>立即登录</Button>
      </View>
    )
  }
}
