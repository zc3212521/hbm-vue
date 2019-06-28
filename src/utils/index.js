import Validate from './validate'
import * as Auth from './auth'
// import XLSX from 'xlsx'
// import { getSelectList } from '@/http/population'

const session = {
  get (key) {
    return sessionStorage.getItem(key)
  },
  set (key, value) {
    return sessionStorage.setItem(key, value)
  }
}

const local = {
  get (key) {
    return localStorage.getItem(key)
  },
  set (key, value) {
    return localStorage.setItem(key, value)
  }
}

const deepClone = (obj) => {
  let newObj = JSON.stringify(obj)
  return JSON.parse(newObj)
}

/**
 * 删除对象属性值为空或者为undefined的属性值
 * @param obj
 * @returns {*}
 */
const deleteEmpty = function (obj) {
  Object.keys(obj).forEach(item => {
    if (item === 'filters') {
      Object.keys(obj[item]).forEach(it => {
        if (obj[item][it] === 'undefined' || obj[item][it] === undefined || obj[item][it] === '' || obj[item][it] === null) {
          delete obj[item][it]
        }
      })
    } else {
      if (obj[item] === 'undefined' || obj[item] === undefined || obj[item] === '' || obj[item] === null) {
        // if (obj[item] === 'undefined' || obj[item] === undefined || obj[item].length <= 0) {
        delete obj[item]
      }
    }
  })
  return obj
}
/**
 * 并列的列表转换成层级结构
 * @param obj
 * @return {*}
 */
const listConvertObj = function (list) {
  let root = null
  if (list && list.length) {
    root = { tagId: 0,
      parentId: null,
      'draw': 0,
      'pageCount': 1,
      'pageNumber': 1,
      'pageSize': 30,
      children: [] }
    const group = {}
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].parentId !== null && list[index].parentId !== undefined) {
        if (!group[list[index].parentId]) {
          group[list[index].parentId] = []
        }
        group[list[index].parentId].push(list[index])
      }
    }
    const queue = []
    queue.push(root)
    while (queue.length) {
      const node = queue.shift()
      node.children = group[node.tagId] && group[node.tagId].length ? group[node.tagId] : null
      if (node.children) {
        queue.push(...node.children)
      }
    }
  }
  return root
}

const log = console.log

/**
 *
 * @param title eg:['姓名', '年龄']; excel表头
 * @param obj eg: [{name: 'zhangsan', age: '20'},{name: 'lisi',age: '18'}]; 需要转换的json数组
 * @param columns eg: ['name', 'age']; json数组中对应表头的key值
 * @param showSerial: boolean ; true表示自动添加序号， 默认false
 * @returns {*[]}
 */
const json2ExcelData = (title, obj, columns, showSerial = false) => {
  if (!(title instanceof Array) || !(columns instanceof Array) || !(obj instanceof Array)) {
    console.error('传入数据格式有误')
    return
  }
  if (title.length !== columns.length) {
    console.error('转换的表头数据与对应数据长度不一致')
    return
  }
  if (showSerial) {
    title.unshift('序号')
    obj.forEach((item, index) => {
      item._serial = index + 1
    })
    columns.unshift('_serial')
  }
  const aoa = [title]
  for (let i = 0; i < obj.length; i++) {
    let item = []
    for (let n = 0; n < title.length; n++) {
      item.push(obj[i][columns[n]])
    }
    aoa.push(item)
  }
  return aoa
}

/**
 * 颠倒字符串
 * @param str
 * @returns {string}
 */
const reverseString = (str) => {
  return str.split('').reverse().join('')
}

// /**
//  * 查找下拉数据字典数据
//  * @param str
//  * @return []
//  */
// const selectList = (str) => {
//   let params = {
//     'subGroupCode': str // 详情参照yapi 数据字典code
//   }
//   getSelectList(params).then((res) => {
//     // console.log(333, res)
//   })
// }
// /**
//  *
//  * 导出导入模板
//  * @param title
//  * @param fileName
//  */
// const exportMould = (title, fileName, columns, data) => {
//   let aoa = json2ExcelData(title, data, columns, false)
//   var worksheet = XLSX.utils.aoa_to_sheet(aoa)
//   var newWorkbook = XLSX.utils.book_new()
//   XLSX.utils.book_append_sheet(newWorkbook, worksheet, 'sheet')
//   /* 生成文件 */
//   XLSX.writeFile(newWorkbook, fileName)
// }

/**
 * 面包屑数据生成，递归调用
 * @param routes
 * @param i
 * @param pathArr
 * @param newArr
 * @returns {Array}
 */
const formatbreadcrumb = (routes, i = 0, pathArr, newArr = []) => {
  if (i < pathArr.length && routes) {
    routes.forEach(item => {
      let pathName = item.path
      if (item.path.indexOf('/') >= 0) {
        pathName = item.path.split('/')[0]
      }
      if (pathName === pathArr[i] && pathName !== 'main') {
        newArr.push({
          title: item.meta.title,
          name: item.name
        })
        if (item.children) {
          i += 1
          formatbreadcrumb(item.children, i, pathArr, newArr)
        }
      }
    })
  }
  return newArr
}

/**
 * 过滤带有权限的一级路由
 * @param permission
 * @returns {*}
 */
const filterTopRouterAuth = (permission) => {
  permission.forEach(item => {
    if (item.children && item.children.length) {
      item.children.forEach((it, n) => {
        if (it.auth) {
          item.children.splice(n, 1)
        }
      })
    }
  })
  return permission
}

/**
 * 判断arr[]:str中的某一项中存在字符串str
 * @param arr
 * @param str
 * @returns {boolean}
 */
const sliceInArr = (arr, str) => {
  if (arr instanceof Array && arr.length > 0) {
    let resultArr = arr.filter((item) => {
      return item.indexOf(str) >= 0
    })
    return resultArr.length > 0
  }
  return false
}

export {
  Validate,
  Auth,
  session,
  local,
  log,
  deepClone,
  deleteEmpty,
  listConvertObj,
  json2ExcelData,
  reverseString,
  // selectList,
  // exportMould,
  formatbreadcrumb,
  filterTopRouterAuth,
  sliceInArr
}
