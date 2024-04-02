import { View, Text } from '@tarojs/components'
import { Image, CellGroup, Button, Field } from '@antmjs/vantui'
import '@antmjs/vantui/es/field/style'
import './login.scss'
import { useState } from 'react'

function WeLogin() {
  const [state, setState] = useState({
    phone: '',
    code: ''
  })
  return <View className='login_container'>
    <View className='login_body'>
      <View className='logo_area' >
        <Image src={require('@/assets/images/logo.png')} width={100} height={100}></Image>
        <Text className='item_margin' style={{ fontWeight: 700, fontSize: '20px' }}>三林康德卫生服务中心</Text>
      </View>
      <View>
        <CellGroup>
          <Field
            value={state.phone}
            label="手机号码"
            placeholder="请输入手机号"
            errorMessage="手机号格式错误"
            autosize={{ minHeight: '30px' }}
            border={false}
          />
        </CellGroup>
      </View>
    </View>

  </View>
}

export default WeLogin
