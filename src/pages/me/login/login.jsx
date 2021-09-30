import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import './login.scss'

export default class Login extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='body'>
        <Button>暂不登录</Button>
        <Button>立即登录</Button>
      </View>
    )
  }
}
