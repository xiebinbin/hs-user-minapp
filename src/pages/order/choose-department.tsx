import { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { Button, TreeSelect } from '@antmjs/vantui'
import './choose-department.scss'
interface SelectTreeState {
  mainActiveIndex: number,
  activeId: string | undefined,
}

interface ItemType {
  id: number
  text: string
  children?: ItemType[]
}

definePageConfig({
  navigationBarTitleText: '选择科室'
})


function ChooseDepartment(props: { hospitalId: string, name: string }) {
  const [state, changeState] = useState<SelectTreeState>({
    mainActiveIndex: 0,
    activeId: undefined,
  })

  const [items, setItems] = useState<ItemType[]>([])
  useEffect(() => {
    const result: ItemType[] = []
    let i = 1;
    result.push({
      id: i++,
      text: '普通门诊',
      children: [
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
        { id: i++, text: '中医科' },
      ]
    })
    result.push({
      id: i++,
      text: '专家门诊',
      children: [
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
        { id: i++, text: '中医科专家' },
      ]
    })
    setItems(result)
  })

  const onClickNav = ({ detail }) => {
    changeState({
      mainActiveIndex: detail.index || 0,
      activeId: undefined
    })
  }

  const onClickItem = ({ detail = {} }) => {
    const activeId = state.activeId === detail.id ? null : detail.id
    changeState({
      ...state,
      activeId,
    })
  }

  return <View className='choose_dep_container'>
    <View style={{ margin: '10px' }}>院区: {props.name}</View>
    <TreeSelect
      className='dep_tree_select'
      items={items}
      height='80%'
      mainActiveIndex={state.mainActiveIndex}
      activeId={state.activeId}
      onClickNav={onClickNav}
      onClickItem={onClickItem}
    />
    <Button className='button_item' type='primary'>下一步</Button>
  </View>
}

export default ChooseDepartment
