import {Component} from 'react'
import Taro from "@tarojs/taro";
import {View, Text, Form, Textarea, Button, RadioGroup, Radio, Image, Input, Picker} from '@tarojs/components'
import {AtImagePicker,AtList, AtListItem} from 'taro-ui'
import SwiperImg from "../../components/SwiperImg";
import TaroRegionPicker from "../../components/TaroRegionPicker/TaroRegionPicker";
import './save.scss'

import {noteSaveOrUpdate, saveOrUpdate} from "../../../common/http";

export default class Save extends Component {
  state = {
    selector: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    selectorChecked: '',
    sexIcon:{
      man:require('../../../assets/sex/man.png'),
      manSelected:require('../../../assets/sex/man_selected.png'),
      girl:require('../../../assets/sex/woman.png'),
      girlSelect:require('../../../assets/sex/woman_selected.png'),
    },
    form:{
      gender:1,
      age:1,
      wechatNumber:'123',
      introduce:'ssss',
      constellation:'处女座',
      province:null,
      city:null,
      area:null,
      files: null,
    }
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

  onChangeImg (files) {
    const {form} = this.state;
    form.files = files;
    this.setState({
      form:form
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  getGender(gender){
    const {form} = this.state;
    form.gender = gender;
    this.setState({
      form:form
    })
  }
  getAge(e){
    const {form} = this.state;
    form.age = e.target.value;
    this.setState({
      form:form
    })
  }
  getWeChatNumber(e){
    const {form} = this.state;
    form.wechatNumber = e.target.value;
    this.setState({
      form:form
    })
  }
  getIntroduce(e){
    const {form} = this.state;
    form.introduce = e.target.value;
    this.setState({
      form:form
    })
  }
  getConstellation = e => {
    const {form} = this.state;
    form.constellation = this.state.selector[e.detail.value];
    this.setState({
      form:form
    })
  }
  onGetRegion (region) {
    // 参数region为选择的省市区
    const {form} = this.state;
    const arr = region.split(' - ');
    form.province = arr[0];
    form.city = arr[1];
    form.area = arr[2];
    this.setState({
      form:form
    })
  }

  /**
   * 校验表单
   * @returns {boolean}
   */
  onValidateField(){
    const {form} = this.state;
    if (form.age == null){
      Taro.showToast({
        title: '请输入年龄',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (form.wechatNumber == null){
      Taro.showToast({
        title: '请输入微信号',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (form.introduce == null){
      Taro.showToast({
        title: '请输入介绍',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (form.introduce == null){
      Taro.showToast({
        title: '请输入选择星座',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (form.city == null){
      Taro.showToast({
        title: '请输入选择省市区',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    /*if (form.files.length == 0){
      Taro.showToast({
        title: '请上传真实照片',
        icon: 'none',
        duration: 1000
      })
      return false;
    }*/
    return true;
  }

  /**
   * 提交表单
   */
  formSubmit() {

    if (!this.onValidateField()){
      return;
    }
    Taro.showLoading({
      title: '加载中',
    })
    const {form} = this.state;
    console.log("提交表单：" + JSON.stringify(form))
    noteSaveOrUpdate(form).then(res=>{
      Taro.hideLoading()
      const data = res.data;
      if (data.code == 200){
        Taro.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        },)
      }
    })
  }
  render() {
    const {form,sexIcon} = this.state;
    return (
      <View className='body'>
        <View className='content'>
          <SwiperImg/>
          <View className='form-body'>
            <View>
              <View className='sex-group'>
                <View className={form.gender == 1?'sex-select':'sex'} onClick={this.getGender.bind(this,1)}>
                  <Image className='sex-img' src={form.gender == 1?sexIcon.manSelected:sexIcon.man} mode='aspectFill'/>
                  <Text className='text'>男生</Text>
                </View>
                <View className={form.gender == 2?'sex-select':'sex'} onClick={this.getGender.bind(this,2)}>
                  <Image className='sex-img' src={form.gender == 2?sexIcon.girlSelect:sexIcon.girl} mode='aspectFill'/>
                  <Text className='text'>女生</Text>
                </View>
              </View>
              <View className='base-info'>
                <Input className='input age' placeholder='年龄' type='number' maxlength='3' value={form.age} onInput={this.getAge.bind(this)}/>
                <Input className='input wx' placeholder='微信号' onInput={this.getWeChatNumber.bind(this)}/>
                <Textarea className='input introduce' placeholder='介绍' onInput={this.getIntroduce.bind(this)}/>
                <View>
                  <Picker mode='selector' range={this.state.selector} onChange={this.getConstellation}>
                    <View className='picker'>
                      <Input className='input constellation' disabled placeholder='选择星座'
                             value={form.constellation}/>
                    </View>
                  </Picker>
                </View>
                <View>
                  <TaroRegionPicker onGetRegion={this.onGetRegion.bind(this)}/>
                </View>
                <View className='input'>
                  {/*<Image*/}
                  {/*       src={this.state.tempFilePath}*/}
                  {/*/>*/}
                  {/*<Image mode='widthFix' className='img'*/}
                  {/*  src={require('../../../assets/home/cloud-upload.png')}*/}
                  {/*/>*/}
                  {/*<View className='upload-label'>*/}
                  {/*  <Text>上传真实图片，</Text><Text className='btn-upload'>点击上传</Text>*/}
                  {/*</View>*/}
                  {/*<AtImagePicker
                    mode='aspectFill'
                    files={form.files}
                    onChange={this.onChangeImg.bind(this)}
                    onFail={this.onFail.bind(this)}
                    onImageClick={this.onImageClick.bind(this)}
                  />*/}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className='btn-group'>
          <View className='icon-btn'>
            <Image className='img' src={require('../../../assets/tab_bar/home.png')} mode='aspectFit'/>
            <Text className='text'>首页</Text>
          </View>
          <View className='icon-btn'>
            <Image className='img' src={require('../../../assets/tab_bar/home.png')} mode='aspectFit'/>
            <Text className='text'>客服</Text>
          </View>
          <Button className='submit' onClick={this.formSubmit.bind(this)}>确认登记</Button>
        </View>
      </View>
    );
  }
}
