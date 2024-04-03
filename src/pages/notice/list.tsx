import { View, Text, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import { useReady } from '@tarojs/taro'
import { useState } from 'react'
import { NoticeListItem } from './preview'
import { Search, Pagination,Icon } from '@antmjs/vantui'

import './list.scss'

function NoticePageList() {
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

  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v) => {
    const c = v
    setCurrentPage2(c)
  }

  return <ScrollView className='scrollContainer'>
    <Search className='list_search' shape="round" placeholder="搜索" />
    {(notices ?? []).map(n => {
      return <View className='scrollItem'>
        <View className='itemLeft'>
          <View className='titleContainer'>
            <Text >
              {n.tag ? <Text style={{ backgroundColor: '#1989FA', color: 'white', padding: 4, fontSize: 12, borderRadius: '5px' }}>{n.tag}</Text> : null}
              <Text className='itemTitle'>{n.title}</Text>
            </Text>
          </View>
          <View className='timeTitle'>1小时前</View>
        </View>
        {n.imgUrl ? <Image className='imageItem' src={n.imgUrl} /> : null}
      </View>
    })}
    <Pagination
      style={{padding: 0,margin: 0,alignItems: 'center' ,justifyContent: 'center'}}
      modelValue={currentPage2}
      pageCount={12}
      mode="simple"
      onChange={pageChange2}
      prevText={<Icon name='arrow-left' color='#969799' size='24rpx' />}
      nextText={<Icon name='arrow' color='#969799' size='24rpx' />}
    />
  </ScrollView>
}


export default NoticePageList;
