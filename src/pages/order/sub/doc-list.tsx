import { useEffect, useState } from "react"
import { ScrollView, View, Text } from '@tarojs/components'
import { Icon, Image } from '@antmjs/vantui'
import SideTopic from "@/component/common/side-topic"
import './doc-list.scss'

definePageConfig({
  navigationBarTitleText: '医生列表'
})

interface Position {
  id: string
  title: string
  avatar: string
  jobTitle: string
  hospitalName: string
}
// 选择院区
function DoctorList() {

  const [positions, setPosition] = useState<Position[]>([])

  useEffect(() => {
    let i = 1
    setPosition([
      { id: (i++).toString(), title: '陈平', jobTitle: '主治医师', hospitalName: '中心院区', avatar: 'https://avatars.githubusercontent.com/u/122279700' },
      { id: (i++).toString(), title: '李刚', jobTitle: '主治医师', hospitalName: '中心院区', avatar: 'https://avatars.githubusercontent.com/u/122279700' },
    ])
  })


  return <View style={{ display: "flex", flex: 1, flexDirection: 'column', padding: '15px' }}>
    <SideTopic label="选择就诊医生" />
    <ScrollView
      className="position_items"
      scrollY
      scrollWithAnimation
      scrollTop={5}
      style={{ height: '100%' }}>
      {positions.map(p => {
        return <View className="position_item" key={p.id}>
          <Image round src={p.avatar} className="position_avatar" />
          <View className="position_title">
            <Text style={{ fontSize: '14px', fontWeight: 400 }}>{p.title}</Text>
            <Text style={{ marginTop: 10, fontSize: '12px', color: '#969799' }}>{p.hospitalName}  {p.jobTitle}</Text>
          </View>
          <View style={{marginLeft: "auto"}}>
            <Icon name="arrow" color="#969799" size={36} ></Icon>
          </View>
        </View>
      })}
    </ScrollView>
  </View>
}


export default DoctorList

