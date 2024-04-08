// 医生详情
import { useEffect, useState } from "react"
import { View, Text } from '@tarojs/components'
import { Image, Button, Icon, Divider, Row, Col } from '@antmjs/vantui'
import SideTopic from '@/component/common/side-topic'
import { TabSwiper, TabSwiperItem } from '@/component/common/tag-swiper'
import './doc-detail.scss'
interface DoctorType {
  id: string
  name: string
  jobTitle: string
  avatar: string
  describe: string
  hospitalId: string
  hospitalName: string
}


interface HourReserveItem {
  id: string
  timeLabel: string
  ticketLeft: number
  // 是否预定
  reserveFlag: boolean
  am: boolean
}


definePageConfig({
  navigationBarTitleText: '医生详情'
})

function DoctorDetail() {
  const [doc, setDoc] = useState<DoctorType>()
  const [hide, setHide] = useState<boolean>(true)
  const [weekItems, setWeekItems] = useState<TabSwiperItem[]>([])
  const [currentDay, setCurrentDay] = useState<{
    dayId: string
    schedules: HourReserveItem[]
  }>()
  useEffect(() => {
    let id = 1
    setDoc({
      id: '1',
      name: '陈平',
      jobTitle: '主治医师',
      avatar: 'https://avatars.githubusercontent.com/u/122279700',
      describe: '华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解',
      hospitalId: '1',
      hospitalName: '上海市中医医院'
    })
    setWeekItems([
      { id: (id++).toString(), title: '周一', label: '03-15' },
      { id: (id++).toString(), title: '周一', label: '03-15' },
      { id: (id++).toString(), title: '周一', label: '03-15' },
      { id: (id++).toString(), title: '周一', label: '03-15' },
      { id: (id++).toString(), title: '周一', label: '03-15' },
      { id: (id++).toString(), title: '周一', label: '03-15' },
      { id: (id++).toString(), title: '周一', label: '03-15' },
    ])
  }, [])

  const describeText = (): string => {
    const describe = doc?.describe ?? '暂无'
    const data = hide ? describe.slice(0, 30) : describe
    if (data.length < describe.length) {
      return data + '......'
    }
    return data
  }

  const tabClick = (id: string) => {
    console.log('点击' + id);
    loadSchedule(id)
  }

  const loadSchedule = (id: string) => {
    if (!id || id === '') {
      return
    }
    let nextId = 1;
    const data = {
      dayId: id,
      schedules: [
        {
          id: (nextId++).toString(),
          timeLabel: '09:00 - 10:00:::' + id,
          ticketLeft: 20,
          reserveFlag: true,
          am: true
        },
        {
          id: (nextId++).toString(),
          timeLabel: '10:00 - 11:00',
          ticketLeft: 20,
          reserveFlag: false,
          am: true
        },
        {
          id: (nextId++).toString(),
          timeLabel: '11:00 - 12:00',
          ticketLeft: 0,
          reserveFlag: true,
          am: true
        },
        {
          id: (nextId++).toString(),
          timeLabel: '13:00 - 14:00',
          ticketLeft: 0,
          reserveFlag: false,
          am: false
        },
        {
          id: (nextId++).toString(),
          timeLabel: '14:00 - 15:00',
          ticketLeft: 0,
          reserveFlag: false,
          am: false
        },
        {
          id: (nextId++).toString(),
          timeLabel: '14:00 - 15:00',
          ticketLeft: 0,
          reserveFlag: false,
          am: false
        },

      ]
    }
    setCurrentDay(data)
  }

  const onPrev = () => {
    console.log('prev');

    let id = 10
    setWeekItems([
      { id: (id++).toString(), title: '周二', label: '03-4' },
      { id: (id++).toString(), title: '周二', label: '03-145' },
      { id: (id++).toString(), title: '周二', label: '03-4' },
      { id: (id++).toString(), title: '周二', label: '03-145' },
      { id: (id++).toString(), title: '周二', label: '03-415' },
      { id: (id++).toString(), title: '周二', label: '03-145' },
      { id: (id++).toString(), title: '周二', label: '03-145' },
    ])
    // weeklyRef.current.init(weekItems)
  }

  const onNext = () => {
    console.log('next');

    let id = 20
    setWeekItems([
      { id: (id++).toString(), title: '周三', label: '03-1' },
      { id: (id++).toString(), title: '周三', label: '03-1' },
      { id: (id++).toString(), title: '周三', label: '03-1' },
      { id: (id++).toString(), title: '周三', label: '03-1' },
      { id: (id++).toString(), title: '周三', label: '03-1' },
      { id: (id++).toString(), title: '周三', label: '03-1' },
      { id: (id++).toString(), title: '周三', label: '03-1' },

    ])
    // weeklyRef.current.init(weekItems)
  }

  const orderButton = (item: HourReserveItem) => {
    let color: string
    if (item.reserveFlag) {
      color = '#0369A1'
      return <View style={{ color }}>查看 <Icon name='arrow' style={{ fontSize: '14px' }} /></View>
    }
    if (item.ticketLeft > 0) {
      color = '#0369A1'
      return <View style={{ color }}>去预约 <Icon name='arrow' style={{ fontSize: '14px' }} /></View>
    } else {
      color = '#CDCDCD'
      return <View style={{ color }} >不可预约 <Icon name='arrow' style={{ fontSize: '14px' }} /></View>
    }
  }

  return <View style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', padding: '10px' }}>
    <View className='detail_header'>
      <Image className='detail_avatar' round src={doc?.avatar ?? ''} ></Image>
      <View className='detail_label'>
        <View>
          <Text style={{ color: '#374151', fontWeight: 600, fontSize: '18px', margin: '0 5px' }}>{doc?.name ?? ''}</Text>
          <Text style={{ color: '#ABABAB', fontWeight: 400, fontSize: '12px' }}>{doc?.jobTitle}</Text>
        </View>
        <View style={{ color: '#8B8B8B', fontWeight: 400, fontSize: '12px', margin: '5px' }}>{doc?.hospitalName ?? ''}</View>
      </View>
    </View>
    <View className='detail_describe'><Text style={{ color: '#ABABAB' }} >{describeText()}</Text></View>
    <View><Button size='small' plain color='#0369A1' style={{ margin: 0, padding: 0 }} onClick={() => { setHide(!hide) }}>{hide ? '展开' : '收起'}</Button></View>
    <Divider style={{ margin: 0 }} />
    <View style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center' }}>
      <SideTopic label='排班信息' />
      <Icon style={{ marginLeft: '10px', fontSize: '15px' }} name={require('@/assets/iconFont/refresh.svg')} onClick={() => {
        loadSchedule(currentDay?.dayId ?? '')
      }} />
    </View>
    <View>
      <TabSwiper data={weekItems} onClickTab={(id) => { tabClick(id) }} prevClick={onPrev} nextClick={onNext}></TabSwiper>
    </View>

    <View className="detail_schedules">
      <View className="detail_day_half">上午</View>
      {currentDay?.schedules.filter(f => f.am).map(s => {
        return <Row className="schedule_line" gutter="20">
          <Col span="8" className="dark">
            <Text>{s.timeLabel}</Text>
          </Col>
          <Col span="8" className="dark">
            <Text>剩余:{s.ticketLeft}</Text>
          </Col>
          <Col span="8" className="dark">
            {orderButton(s)}
          </Col>
        </Row>
      })}
      <View className="detail_day_half">下午</View>
      {currentDay?.schedules.filter(f => !f.am).map(s => {
        return <Row className="schedule_line" gutter="20">
          <Col span="8" className="dark">
            <Text>{s.timeLabel}</Text>
          </Col>
          <Col span="8" className="dark">
            <Text>剩余:{s.ticketLeft}</Text>
          </Col>
          <Col span="8" className="dark">
            {orderButton(s)}
          </Col>
        </Row>
      })}
    </View>
  </View>
}

export default DoctorDetail
