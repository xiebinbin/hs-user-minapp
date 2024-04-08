// 预约成功
import { View, Text } from '@tarojs/components'
import { Image, Button } from '@antmjs/vantui'

definePageConfig({
  navigationBarTitleText: '预约成功'
})


function OrderSuccess(props: {}) {

  return <View style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center',marginTop: '40%' }}>
      <Image src={require('@/assets/iconFont/success.svg')} width={160} height={160} />
      <Text style={{fontSize: 24,margin: 12}}>预约成功</Text>
    </View>
    <View  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center',width: '100%'}}>
      <Button type='primary' size='normal' round style={{width: '80%',margin: '24px'}} >查看预约</Button>
      <Button plain hairline round style={{border: '1px solid #DCDEE0',width: '80%'}}>返回首页</Button>
    </View>
  </View>
}

export default OrderSuccess
