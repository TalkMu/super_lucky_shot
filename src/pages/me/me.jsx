import {Component} from 'react'
import {View, Text, Button, Image} from '@tarojs/components'
import './me.scss'
import Taro from "@tarojs/taro";
import defaultHead from '../../assets/me/head.png'

export default class Me extends Component {

  state = {
    userInfo: {
      nickName: '登录',
      avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJbh5FQajwKhM6IcH7z3fsJesntdTLW0Xe7cj1FtYia7eDDlCichO3h651iaYv6AnianHzTQ50YdRg30Q/132',
      single: false,
    },
    hasLogin: false,
    menuList: [
      {
        menuIcon: require('../../assets/me/menu/profit.png'),
        menuName: '我的收益',
        menuCode: "profit",
        state: false
      },
      {
        menuIcon: require('../../assets/me/menu/customer.png'),
        menuName: '我的客户',
        menuCode: "customer",
        state: false
      },
      {
        menuIcon: require('../../assets/me/menu/spread.png'),
        menuName: '海报推广',
        menuCode: "profit",
        state: false
      },
      {
        menuIcon: require('../../assets/me/menu/team.png'),
        menuName: '我的团队',
        menuCode: "team",
        state: false
      }
    ]
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {
    if (!this.state.hasLogin) {
      const userInfo = Taro.getStorageSync('userInfo');
      console.log("userInfo:" + userInfo)
      if (userInfo != null && userInfo != '') {
        console.log("登录成功")
        this.setState({
          userInfo: userInfo,
          hasLogin: true
        })
      } else {
        console.log("未登录")
      }
    }
  }

  componentDidHide() {
  }

  login() {
    if (!this.state.hasLogin) {
      Taro.navigateTo({
        url: '/pages/me/login/login',
      })
    }
  }

  changeStatus() {
    const userInfo = this.state.userInfo;
    const curStatus = !userInfo.single;
    userInfo.single = curStatus;
    this.setState({userInfo: userInfo})
  }

  clickMenu(item) {
    if (!item.state) {
      Taro.showToast({
        title: '暂未开放',
        icon: 'none',
        duration: 1000
      })
    } else {
      Taro.navigateTo({
        url: '/pages/me/' + item.menuCode + "/" + item.menuCode,
      })
    }
  }
  loginOut(){
    Taro.clearStorage()
    this.setState({hasLogin:false})
  }
  render() {
    const {userInfo, menuList,hasLogin} = this.state;
    return (
      <View className='body'>
        <View className='user-section' onClick={this.login.bind(this)}>
          <View>
            <Image src={hasLogin?userInfo.avatarUrl:defaultHead} className='avatar' />
          </View>
          <View className='info'>
            <View className='name'>{hasLogin?userInfo.nickName:'点击获取昵称~'}</View>
            <View className='label'>
              <View className='cur-status'>当前状态：{userInfo.single == true ? '单身' : '非单身'}</View>
              <View className='change-status' onClick={this.changeStatus.bind(this)}>切换</View>
            </View>
          </View>
        </View>
        <View className='menu-section'>
          {
            menuList.map((item, index) => (
              <View key={index} className='item' onClick={this.clickMenu.bind(this, item)}>
                <Image src={item.menuIcon} mode='scaleToFill' className='icon'/>
                <Text className='text'>{item.menuName}</Text>
              </View>
            ))
          }
        </View>
        <Button onClick={this.loginOut.bind(this)}>退出登录</Button>
      </View>
    )
  }
}
