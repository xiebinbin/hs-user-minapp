import { useEffect, useState } from "react";
import { CommonTableViewType } from "@/api/types/common";
import { MemberItemType } from "@/api/types/user";
import { TableView } from "@/component/common/table-view";
import { View } from "@tarojs/components";
import { Button } from "@antmjs/vantui";

definePageConfig({
  navigationBarTitleText: '成员详情'
})


function MemberDetailPage(props: { member: MemberItemType }) {
  const [item, setItem] = useState<CommonTableViewType[]>()
  props.member = {
    id: (2).toString(),
    name: '谢彬彬',
    idCard: '51078*********357X',
    gender: 1,
    age: 30,
    phone: '13133376721'
  }
  useEffect(() => {
    const array: CommonTableViewType[] = []
    array.push({ key: 'name', value: props.member.name, describe: '姓名' })
    array.push({ key: 'idCard', value: props.member.idCard, describe: '身份证' })
    array.push({ key: 'gender', value: props.member.gender === 1 ? '男' : '女', describe: '性别' })
    array.push({ key: 'age', value: props.member.age.toString(), describe: '年龄' })
    array.push({ key: 'phone', value: props.member.phone, describe: '手机号' })
    setItem(array)
  }, [1])

  return <View>
    <TableView items={item ?? []}></TableView>
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', width: '100%' }}>
      <Button type='primary' size='normal' round style={{ width: '80%', margin: '20px' }} >编辑成员</Button>
      <Button plain hairline round type="danger" style={{ border: '1px solid', width: '80%' }}>删除成员</Button>
    </View>
  </View>
}

export default MemberDetailPage
