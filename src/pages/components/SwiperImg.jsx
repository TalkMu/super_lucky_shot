import {Component} from "react";
import {Image, Swiper, SwiperItem} from "@tarojs/components";
import './SwiperImg.scss'

export default class SwiperImg extends Component{
  state = {
    imgUrls: [
      'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
      'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
      'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
    ],
  }

  render() {
    return (
      <Swiper className='swiper-body'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              current={1}
              duration={500}
              interval={5000}
              circular
              autoplay
              indicatorDots
      >
        {
          this.state.imgUrls.map((item, idx) => (
            <SwiperItem key={idx} className='swiper-item'>
              <Image mode='widthFix' src={item} className='slide-image'/>
            </SwiperItem>
          ))
        }
      </Swiper>
    )
  }
}
