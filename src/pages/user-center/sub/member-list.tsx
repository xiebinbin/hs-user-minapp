import { View, Text } from '@tarojs/components'
import { Icon } from '@antmjs/vantui'
import { MemberItemType } from "@/api/types/user"
import { useEffect, useState } from "react"

import './member-list.scss'

definePageConfig({
  navigationBarTitleText: '成员列表'
})

function MemberList() {
  const [members, setMembers] = useState<MemberItemType[]>([])
  useEffect(() => {
    let i = 0
    setMembers([
      {
        id: (i++).toString(),
        name: '谢彬彬',
        idCard: '51078*********357X',
        gender: 1,
        age: 30,
        phone: '13133376721'
      },
      {
        id: (i++).toString(),
        name: '赵靖宇',
        idCard: '51078*********357X',
        gender: 1,
        age: 30,
        phone: '13133376721'
      }
    ])
  }, [1])

  return <View style={{ display: "flex", flex: 1, flexDirection: 'column', padding: '15px' }}>
    <View
      className="position_items"
      style={{ height: '100%' }}>
      {members.map(p => {
        return <View className="position_item" key={p.id}>
          <View className="position_title">
            <Text style={{ marginTop: 10, fontSize: '14px', fontWeight: 400 }}>{p.name}</Text>
            <Text style={{ marginTop: 10, fontSize: '12px', color: '#969799' }}>身份证号：{p.idCard}</Text>
          </View>
          <View >
            <Icon name="arrow" color="#969799" size={36}></Icon>
          </View>
        </View>
      })}
    </View>
  </View>
}

export default MemberList
