import { View, Text } from '@tarojs/components'
import { Image, Divider, Icon } from '@antmjs/vantui'

import './index.css'

function UserCenter() {
  return <View className='account_container'>
    <View className='account_header'>
      <View className='account_avatar' >
        <Image src='https://avatars.githubusercontent.com/u/122279700' width='50px' height='50px' round />
      </View>
      <View className='account_nickname'>
        <Text style={{ fontWeight: 500, fontSize: 18 }}>最美的人</Text>
        <Text style={{ fontSize: 12, color: '#D1D5DB' }}>已守护您1天</Text>
      </View>
    </View>

    <View className='account_content'>
      <View className='content_item' style={{ borderBottom: '1px solid #EAEAEA' }}>
        <View style={{ display: 'flex' }}>
          <Image src={require('@/assets/images/icon-timeorder.svg')} width='30px' height='30px'></Image>
          <Text style={{ marginLeft: 10, fontSize: 14, alignSelf: 'center' }}>预约记录</Text>
        </View>
        <Icon style={{ alignSelf: 'center' }} name='arrow' color='#969799' size='24rpx' />
      </View>
      <View className='content_item' >
        <View style={{ display: 'flex' }}>
          <Image src={require('@/assets/images/icon-account.svg')} width={60} height={60}></Image>
          <Text style={{ marginLeft: 10, fontSize: 14, alignSelf: 'center' }}>就诊人员</Text>
        </View>
        <Icon style={{ alignSelf: 'center' }} name='arrow' color='#969799' size='24rpx' />
      </View>
    </View>

    <View className='account_footer' style={{ padding: '20px' }}>
      <Divider contentPosition="center" fontSize='18'>
        三林康德社区卫生服务中心
      </Divider>

    </View>
  </View>
}
export default UserCenter;
