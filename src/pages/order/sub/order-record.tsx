// 预约记录
import { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, Tabs, Tab, Icon } from '@antmjs/vantui'
import './order-record.scss'
import { PageButton } from '@/component/page/pagination'
definePageConfig({
  navigationBarTitleText: '预约记录'
})

interface RecordItem {
  id: string
  hospitalName: string
  departmentName: string
  doctorName?: string
  type: number
  orderDate: string
  orderTime: string
  status: number
}

function OrderRecordView(props) {
  const [active, setActive] = useState(0)
  const [simpleRecords, setSimpleRecords] = useState<RecordItem[]>([])
  const [expertRecords, setExpertRecords] = useState<RecordItem[]>([])
  const [currentPage1, setCurrentPage1] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(1)

  const queryPage1 = (page: number) => {
    setCurrentPage1(page)
  }
  const queryPage2 = (page: number) => {
    setCurrentPage2(page)
  }

  useEffect(() => {
    let i = 1
    setSimpleRecords([
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 1
      },
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 2
      }
    ])
    setExpertRecords([
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 1,
        doctorName: '陈平'
      },
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 2,
        doctorName: '陈平'
      }
    ])
  }, [1])

  return <Tabs
    className='order_record_tabs'
    active={active}
    onChange={(e) => {
      setActive(e.detail.index)
    }}
  >
    <Tab title="普通门诊" style={{ padding: '10px' }}>
      {simpleRecords.map(r => {
        return <View className="position_item" key={r.id} >
          <View className="position_title">
            <Text style={{ marginTop: 10, fontSize: '16px', fontWeight: 400 }}>{r.hospitalName}</Text>
            <Text style={{ marginTop: 10, fontSize: '14px', color: '#585858' }}>普通-{r.departmentName}</Text>
            <Text style={{ marginTop: 10, fontSize: '12px', color: '#9F9F9F' }}>{r.orderDate}-{r.orderDate}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Text style={{ fontSize: 12, color: (r.status === 1) ? '#0369A1' : '#8F8F8F' }}>{r.status === 1 ? '预约成功' : '已取消'}</Text>
            <Icon name="arrow" color="#969799" size={36}></Icon>
          </View>
        </View>
      })}
      <PageButton modelValue={currentPage1}
        pageCount={12}
        onChange={queryPage1}>
      </PageButton>
    </Tab>
    <Tab title="专家门诊" style={{ padding: '10px' }}>
      {expertRecords.map(r => {
        return <View className="position_item" key={r.id} >
          <View className="position_title">
            <Text style={{ marginTop: 10, fontSize: '16px', fontWeight: 400 }}>{r.hospitalName}</Text>
            <Text style={{ marginTop: 10, fontSize: '14px', color: '#585858' }}>专家-{r.doctorName}</Text>
            <Text style={{ marginTop: 10, fontSize: '12px', color: '#9F9F9F' }}>{r.orderDate}-{r.orderDate}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Text style={{ fontSize: 12, color: (r.status === 1) ? '#0369A1' : '#8F8F8F' }}>{r.status === 1 ? '预约成功' : '已取消'}</Text>
            <Icon name="arrow" color="#969799" size={36}></Icon>
          </View>
        </View>
      })}
      <PageButton modelValue={currentPage1}
        pageCount={12}
        onChange={queryPage2}>
      </PageButton>
    </Tab>
  </Tabs>
}

export default OrderRecordView
