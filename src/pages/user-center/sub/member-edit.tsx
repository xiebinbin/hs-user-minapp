import { View, Text, Input, Picker } from '@tarojs/components'
import {
  Form,
  FormItem,
  Button
} from '@antmjs/vantui'
import { MemberItemType } from "@/api/types/user";
import { useEffect, useState } from 'react';
import { idCardHandle } from '@/lib/util';

definePageConfig({
  navigationBarTitleText: '编辑成员'
})

export function MemberEdit(props: { member?: MemberItemType }) {
  const formIt = Form.useForm()
  const [age, setAge] = useState('')
  const [state, setState] = useState({
    selector: [{ k: '1', v: '男' }, { k: '0', v: '女' }],
    selectorChecked: '',
  })
  useEffect(()=>{},[age])
  const handleClick = () => {

  }
  return <View>
    <Form
      form={formIt}
      onFinish={(errs, res) => console.info(errs, res)}
    >
      <FormItem
        label="姓名"
        name="name"
        required
        rules={{
          rule: /[u4e00-u9fa5]/,
          message: '用户名仅支持中文',
        }}
        trigger="onInput"
        validateTrigger="onBlur"
        // taro的input的onInput事件返回对应表单的最终值为e.detail.value
        valueFormat={(e) => e.detail.value}
      >
        <Input placeholder="请输入姓名（中文）" />
      </FormItem>

      <FormItem
        label="证件号"
        name="idCard"
        required
        valueFormat={(e) => e.detail.value}
        rules={{
          rule: /^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/,
          message: '输入正确的身份证',
        }}
        trigger="onInput"
      >
        <Input placeholder='请输入身份证' onInput={(e) => {
          const cardResult = idCardHandle(e.detail.value)
          if (cardResult !== null) {
            console.log('age'+cardResult.age);

            setAge(cardResult.age.toString())
          }
        }} />
      </FormItem>
      <FormItem
        label="性别"
        name="gender"
        required
      >
        <Picker mode='selector' range={state.selector} rangeKey='v' onChange={(e) => {
          setState({
            ...state,
            selectorChecked: state.selector[e.detail.value].v
          })
        }}>
          <View style={{ width: '100px', height: '30px' }}>
            {state.selectorChecked}
          </View>
        </Picker>
      </FormItem>
      <FormItem
        label="年龄"
        name="age"
        required
      >
        <View>{age}</View>
      </FormItem>

      <FormItem
        label="手机号"
        name="phone"
        required
        valueFormat={(e) => e.detail.value}
        trigger="onInput"
      >
        <Input placeholder='请输入手机号' onInput={() => { }} />
      </FormItem>
      <Button
        type="primary"
        className="van-button-submit"
        round
        style={{
          width: '80%', left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: '30px 0'
        }}
        onClick={handleClick}
      // formType="submit"
      >
        提交
      </Button>
    </Form>
  </View>
}

export default MemberEdit
