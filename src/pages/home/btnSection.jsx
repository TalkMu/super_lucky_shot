import { Component } from 'react'
import Taro from '@tarojs/taro'
import {Button, View} from '@tarojs/components'
import './btnSection.scss'

export default class BtnSection extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleSave(){
    Taro.navigateTo({
      url: '/pages/save/save',
    })
  }
  handleTake(){
    Taro.navigateTo({
      url: '/pages/take/take',
    })
  }
  render () {
    return (
      <View className='body'>
        <View className='btn-group'>
          <View onClick={this.handleSave.bind(this)} className='btn save-btn'>
            <View className='save'>存</View>
            <View className='desc'>
              <View>一个一块钱</View>
              <View>开启一段缘</View>
            </View>
          </View>
          <View onClick={this.handleTake.bind(this)} className='btn take-btn'>
            <View className='take'>取</View>
            <View className='desc'>
              <View>一个一块钱</View>
              <View>脱单有机缘</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
