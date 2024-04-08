import { useEffect, useState } from "react"
import { ScrollView, View,Text } from '@tarojs/components'
import {Icon} from '@antmjs/vantui'
import './choose-hospital.scss'

definePageConfig({
  navigationBarTitleText: '选择院区'
})

interface Position {
  id: string
  title: string
  address: string
}
// 选择院区
function ChoosePosition() {

  const [positions, setPosition] = useState<Position[]>([])

  useEffect(() => {
    let i = 1
    setPosition([
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
      { id: (i++).toString(), title: '三林康德社区卫生服务中心' + i, address: '上海市浦东新区和佳路17号' },
    ])
  })


  return <View style={{ display: "flex", flex: 1, flexDirection: 'column', padding: '15px' }}>
    <View className="order_side_bar">请选择预约院区</View>
    <ScrollView
      className="position_items"
      scrollY
      scrollWithAnimation
      scrollTop={5}
      style={{ height: '100%' }}>
      {positions.map(p => {
        return <View className="position_item" key={p.id}>
          <View className="position_title">
            <Text style={{marginTop: 10,fontSize: '14px',fontWeight: 400}}>{p.title}</Text>
            <Text style={{marginTop: 10,fontSize: '12px',color: '#969799'}}>{p.address}</Text>
          </View>
          <View >
            <Icon name="arrow" color="#969799" size={36}></Icon>
          </View>
        </View>
      })}
    </ScrollView>
  </View>
}


export default ChoosePosition

