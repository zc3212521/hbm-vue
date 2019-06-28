// 再具体按页面使用范例:
// 1.获取字典项 getDict(['carType', 'workType'])
// 2.更新字典项 updateDict(['carType', 'workType'])
// 注意：获取字典项的请求参数必须与返回对应键名称相等
// eg: 入参 {type: ['carType']}
// 则出参为 {'carType': [{ name: '业主车辆', value: '0'},{ name: '其他车辆', value: '1'}]}] carType一致
// 如果设置了某个字典值接着要获取，则需要 updateDict(['carType']).then(() => {getDict(['carType'])})

export const updateDict = (types = []) => {
  return window.vm.$store.dispatch('generateDict', types)
}

export const getDict = (types = []) => {
  let originResult = window.vm.$store.getters.getDicts(types)
  let result = {}
  originResult.forEach((item, i) => {
    result[Object.keys(item)[0]] = item[Object.keys(item)[0]]
  })
  return result
}
