import { View, Text, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import { useReady } from '@tarojs/taro'
import './preview.scss'
import { useState } from 'react'


export interface NoticeListItem {
  tag?: string
  title: string
  createdAt: number
  imgUrl?: string
}

function NoticePreview() {
  const [notices, setNotices] = useState<NoticeListItem[]>()

  useReady(() => {
    const data = [
      {
        tag: '置顶',
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
        imgUrl: 'https://i5.hoopchina.com.cn/news-editor/2024-4-1/22-05-36/cd0cc832-847d-4c5c-bd42-ebb3255b254e.jpeg'
      }, {
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
        imgUrl: 'https://i5.hoopchina.com.cn/news-editor/2024-4-1/22-05-36/cd0cc832-847d-4c5c-bd42-ebb3255b254e.jpeg'
      },
      {
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
        imgUrl: 'https://i5.hoopchina.com.cn/news-editor/2024-4-1/22-05-36/cd0cc832-847d-4c5c-bd42-ebb3255b254e.jpeg'
      }, {
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
        imgUrl: 'https://i5.hoopchina.com.cn/news-editor/2024-4-1/22-05-36/cd0cc832-847d-4c5c-bd42-ebb3255b254e.jpeg'
      },
      {
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
        imgUrl: 'https://i5.hoopchina.com.cn/news-editor/2024-4-1/22-05-36/cd0cc832-847d-4c5c-bd42-ebb3255b254e.jpeg'
      }, {
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
      }, {
        title: '【康德“医”闻】失眠精神康复疗愈，擦亮三林康德品牌',
        createdAt: 10000,
      }
    ]
    setNotices(data)
  })

  return <View className='scrollContainer'>
    {(notices ?? []).map(n => {
      return <View className='scrollItem'>
        <View className='itemLeft'>
          <View className='titleContainer'>
            <Text >
              {n.tag ? <Text style={{ backgroundColor: '#1989FA', color: 'white', padding: 4,fontSize: 12,borderRadius: '5px' }}>{n.tag}</Text> : null}
              <Text className='itemTitle'>{n.title}</Text>
            </Text>
          </View>
          <View className='timeTitle'>1小时前</View>
        </View>
        {n.imgUrl ? <Image className='imageItem' src={n.imgUrl} /> : null}
      </View>
    })}
  </View>
}


export default NoticePreview;
