import {Component} from 'react'
import {View, Text, Form, Switch, Button, RadioGroup, Radio, Image, Input, Picker} from '@tarojs/components'
import SwiperImg from "../../components/SwiperImg";
import './save.scss'

import man from '../../../assets/sex/man.png'
import girl from '../../../assets/sex/girl.png'

export default class Save extends Component {
  state = {
    selector: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    selectorChecked: '',
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
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

  formSubmit() {

  }

  formReset() {

  }

  render() {
    return (
      <View className='body'>
        <SwiperImg />
        <View className='form-body'>
          <Form onSubmit={this.formSubmit} onReset={this.formReset}>
            <View >
              <RadioGroup className='sex'>
                <Radio>
                  <Image src={man} className='sex-img man'/>
                </Radio>
                <Radio>
                  <Image src={girl} className='sex-img girl'/>
                </Radio>
              </RadioGroup>
              <View className='base-info'>
                <Input className='input age' placeholder='年龄' type='number' maxlength='3'/>
                <Input className='input wx' placeholder='微信号'/>
                <View>
                  <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                    <View className='picker'>
                      <Input className='input constellation' disabled placeholder='星座' value={this.state.selectorChecked}/>
                    </View>
                  </Picker>
                </View>
              </View>
            </View>
            <View>
              <Button formType='submit'>确认登记</Button>
            </View>
          </Form>
        </View>
      </View>
    )
  }
}
