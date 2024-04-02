import { View, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { useState } from 'react'
import NoticePreview from '../notice/preview'
import { Icon, Image } from '@antmjs/vantui'

export default function Index() {
  const [banner, setBanner] = useState([{ id: 1, pic: 'https://avatars.githubusercontent.com/u/122279700' },
  { id: 2, pic: 'https://avatars.githubusercontent.com/u/122279700' }])
  useLoad(() => {
    console.log('Page loaded.')
  })

  const scrollTop = 0
  return (
    <ScrollView
      className='home_container'
      scrollY
      scrollWithAnimation
      scrollTop={scrollTop}
      style={{ height: '100%' }}
    >
      <View className='header'>
        <View className='index_header__title'>
          <Image width={100} height={100} src={require("../../assets/images/logo-small.png")} />
          <Text className='header_title'>三林康德社区卫生服务中心</Text>
        </View>
        <View className='index_header_content'>
          <Text className='header_content_label'>
            面向社会，以促进健康为中心开展预防医疗、保健等教育和计划生育技术指导，“六位一体”的社区卫生服务。
          </Text>
          <Image
            width="100%"
            height="100px"
            fit="cover" src={require("../../assets/images/home-top.png")} />
        </View>
      </View>
      <Swiper
        className="banner_list"
        indicatorColor="#999"
        indicatorActiveColor="#d43c33"
        circular
        indicatorDots
        autoplay
      >
        {banner.map(item => (
          <SwiperItem key={item.id} className="banner_list__item">
            <Image src={item.pic} width="100%" radius={15} height="275px" fit="cover" />
          </SwiperItem>
        ))}
      </Swiper>
      <View className='order'>
        <View className='orderItem'>
          <Image width={50} height={50} src={require('@/assets/images/icon-notebook.svg')} />
          <View className='orderContent'>
            <Text style={{ fontWeight: 600, fontSize: 18, textAlign: 'left' }}>预约就诊</Text>
            <Text style={{ fontSize: 10, textAlign: 'left', color: '#9CA3AF' }}>在线预约 到院就诊</Text>
          </View>
        </View>
        <View className='orderItem'>
          <Image width={50} height={50} src={require('@/assets/images/icon-timeorder.svg')} />
          <View className='orderContent'>
            <Text style={{ fontWeight: 600, fontSize: 18, textAlign: 'left' }}>我的预约</Text>
            <Text style={{ fontSize: 10, textAlign: 'left', color: '#9CA3AF' }}>查看预约记录</Text>
          </View>
        </View>
      </View>

      <View className='notice_container'>
        <View className='notice_header'>
          <View>最新公告</View>
          <View style={{ color: '#969799' }}>查看更多<Icon name='arrow' color='#969799' size='24rpx' /> </View>
        </View>
        <NoticePreview></NoticePreview>
      </View>

    </ScrollView>
  )
}
