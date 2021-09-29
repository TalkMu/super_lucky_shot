import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import SwiperImg from "../components/SwiperImg";
import BtnSection from "./btnSection";
import './home.scss'

export default class Home extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='body'>
        <SwiperImg />
        <BtnSection />
      </View>
    )
  }
}
