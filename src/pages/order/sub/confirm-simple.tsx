import { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, RadioGroup, Radio, Image } from '@antmjs/vantui'
import SideTopic from '@/component/common/side-topic'

definePageConfig({
  navigationBarTitleText: '预约确认'
})
// 普通门诊确认

interface ConfirmInfo {
  hospitalId: string
  hospitalName: string
  departmentId: string
  departmentName: string
  orderDate: string
  orderTime: string
  type: number
}

interface UserItem {
  id: string
  name: string
  idCard: string
}

const styles = {
  confirmLine: {
    padding: '12px',
    borderBottom: '1px solid #EBEDF0'
  },

}

const previewClick:any = {
  width: '80%',
  padding: '10px',
  fontSize: '30rpx',
  margin: '20px',
  alignSelf: 'center'
}


const CheckSelect = <Image width={36} height={36} src={require('@/assets/iconFont/check-select.svg')} />
const CheckUnSelect = <Image width={36} height={36} src={require('@/assets/iconFont/check-unselect.svg')} />

function ConfirmSimple(props: { data: ConfirmInfo }) {

  const [users, setUsers] = useState<UserItem[]>([])
  const [confirmInfo, setConfirmInfo] = useState<ConfirmInfo>()
  const [selUser, setSelUser] = useState('')
  useEffect(() => {
    let i = 1;
    setUsers([{
      id: (i++).toString(),
      name: '谢彬彬',
      idCard: '510781199102022222'
    },
    {
      id: (i++).toString(),
      name: '谢彬彬',
      idCard: '510781199102022222'
    }])

    setConfirmInfo({
      hospitalId: '1',
      hospitalName: '三林康德社区卫生服务中心',
      departmentId: '2',
      departmentName: '骨科',
      orderDate: '2023年1月1日/周四',
      orderTime: '上午 11:00-12:00',
      type: 1
    })
    setSelUser('1')
  }, [props.data])

  return <View style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  }}>
    <View style={{ textAlign: 'center', fontSize: 20, fontWeight: 400, margin: '10px 0' }}>请确认您的预约信息</View>
    <View style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <SideTopic label='预约信息' />
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>院区</Text>
        <Text>{confirmInfo?.hospitalName}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>科室</Text>
        <Text>{confirmInfo?.departmentName}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>日期</Text>
        <Text>{confirmInfo?.orderDate}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>时间</Text>
        <Text>{confirmInfo?.orderTime}</Text>
      </View>
      <View style={{ ...styles.confirmLine, border: 'none' }}>
        <Text style={{ marginRight: 20 }}>类型</Text>
        <Text>{confirmInfo?.type === 1 ? '普通门诊' : '专家门诊'}</Text>
      </View>
    </View>

    <View>
      <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <SideTopic label='就诊人' />
        <Button plain size='normal' style={{ padding: 0, margin: 0, height: 30, color: '#0369A1' }}>添加就诊人</Button>
      </View>
      <View style={{display: 'flex',flexDirection: 'column'}}>
        <RadioGroup value={selUser} onChange={(e) => setSelUser(e.detail)} style={{ marginTop: 10 }}>
          {users.map(u => {
            return <Radio name={u.id} renderIcon={selUser === u.id ? CheckSelect : CheckUnSelect} style={{ padding: 0, margin: 0 }}>
              <View style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', padding: 0, margin: 0 }}>
                <Text style={{ fontSize: 14, padding: 0, margin: 0 }}>{u.name}</Text>
                <Text style={{ color: '#969799', fontSize: 12, padding: 0, margin: 0 }}>{u.idCard}</Text>
              </View>
            </Radio>
          })}
        </RadioGroup>
        <Button size='normal' round type='primary' style={previewClick} onClick={(() => { })
        }>确认预约</Button>
      </View>
    </View>
  </View>
}

export default ConfirmSimple
