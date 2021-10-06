import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  static defaultProps = {
    userInfo: {
      nickName:'登录',
      avatarUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJbh5FQajwKhM6IcH7z3fsJesntdTLW0Xe7cj1FtYia7eDDlCichO3h651iaYv6AnianHzTQ50YdRg30Q/132'
    },
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {

  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
