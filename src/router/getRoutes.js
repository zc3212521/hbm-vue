import Home from '@/views/home/index'
import PlaceholderRouter from '@/components/placeholderRouter/index'

const originChildren = [
  {
    path: 'system',
    name: 'system',
    redirect: 'system/auth',
    meta: {
      title: '系统管理',
      icon: '',
      leaf: '0'
    },
    component: () => import(/* webpackChunkName: "system" */ '@/views/home/system'),
    children: [
      {
        path: 'auth',
        name: 'auth',
        redirect: 'auth/userManagement',
        meta: {
          title: '权限管理',
          icon: '',
          leaf: '0-0'
        },
        component: PlaceholderRouter,
        children: [
          {
            path: 'userManagement',
            name: 'userManagement',
            meta: {
              title: '用户管理',
              icon: '',
              leaf: '0-0-0'
            },
            component: () => import(/* webpackChunkName: "userManagement" */ '@/views/home/system/auth/userManagement')
          },
          {
            path: 'roleManagement',
            name: 'roleManagement',
            meta: {
              title: '角色管理',
              icon: '',
              leaf: '0-0-1'
            },
            component: () => import(/* webpackChunkName: "userManagement" */ '@/views/home/system/auth/roleManagement')
          },
          {
            path: 'positionManagement',
            name: 'positionManagement',
            meta: {
              title: '职位管理',
              icon: '',
              leaf: '0-0-1'
            },
            component: () => import(/* webpackChunkName: "positionManagement" */ '@/views/home/system/auth/positionManagement')
          },
          {
            path: 'structure',
            name: 'structure',
            meta: {
              title: '组织架构',
              icon: '',
              leaf: '0-0-1'
            },
            component: () => import(/* webpackChunkName: "structure" */ '@/views/home/system/auth/structure')
          }
        ]
      },
      {
        path: 'asset',
        name: 'asset',
        meta: {
          title: '资源管理',
          icon: '',
          leaf: '0-1'
        },
        component: () => import(/* webpackChunkName: "asset" */ '@/views/home/system/asset')
      }
    ]
  },
  {
    path: 'userCenter',
    name: 'userCenter',
    redirect: 'userCenter/userPage',
    meta: {
      title: '个人中心',
      icon: ''
    },
    component: () => import(/* webpackChunkName: "userCenter" */ '@/views/home/userCenter'),
    children: [
      {
        path: 'userPage',
        name: 'userPage',
        redirect: 'userPage/userInfo',
        meta: {
          title: '个人页',
          icon: ''
        },
        component: PlaceholderRouter,
        children: [
          {
            path: 'userInfo',
            name: 'userInfo',
            meta: {
              title: '个人信息',
              icon: ''
            },
            component: () => import(/* webpackChunkName: "userInfo" */ '@/views/home/userCenter/userPage/userInfo')
          },
          {
            path: 'passwordManagement',
            name: 'passwordManagement',
            meta: {
              title: '密码管理',
              icon: ''
            },
            component: () => import(/* webpackChunkName: "passwordManagement" */ '@/views/home/userCenter/userPage/passwordManagement')
          }
        ]
      }
    ]
  },
  {
    path: 'systemReport',
    name: 'systemReport',
    redirect: 'systemReport/statisticsChart',
    meta: {
      title: '系统报表',
      icon: ''
    },
    component: () => import(/* webpackChunkName: "systemReport" */ '@/views/home/systemReport'),
    children: [
      {
        path: 'statisticsChart',
        name: 'statisticsChart',
        meta: {
          title: '统计报表',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "statisticsChart" */ '@/views/home/systemReport/statisticsChart')
      },
      {
        path: 'auditChart',
        name: 'auditChart',
        meta: {
          title: '审计报表',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "auditChart" */ '@/views/home/systemReport/auditChart')
      }
    ]
  },
  {
    path: 'test',
    name: 'test',
    redirect: 'test/http',
    meta: {
      title: '测试',
      icon: ''
    },
    component: () => import(/* webpackChunkName: "test" */ '@/views/home/test'),
    children: [
      {
        path: 'http',
        name: 'http',
        meta: {
          title: 'http相关',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "http" */ '@/views/home/test/http')
      },
      {
        path: 'upload',
        name: 'upload',
        meta: {
          title: '上传',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "upload" */ '@/views/home/test/upload')
      },
      {
        path: 'richEditor',
        name: 'richEditor',
        meta: {
          title: '富文本编辑器',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "richEditor" */ '@/views/home/test/richEditor')
      },
      {
        path: 'chart',
        name: 'chart',
        meta: {
          title: '图表',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "chart" */ '@/views/home/test/chart')
      }
    ]
  }
]

const getUserRouter = (myPermission) => {
  return new Promise(resolve => {
    // const hasrouters = []
    // myPermission.forEach((item, i) => {
    //   for (let n = 0; n < originChildren.length; n++) {
    //     if (item.name === originChildren[n].name) {
    //       if (item.children.length > 0) {
    //         let addChildren = []
    //         for (let m = 0; m < item.children.length; m++) {
    //           for (let p = 0; p < originChildren[n].children.length; p++) {
    //             if (item.children[m].name === originChildren[n].children[p].name) {
    //               addChildren.push(originChildren[n].children[p])
    //             }
    //           }
    //         }
    //         originChildren[n].children = addChildren
    //       } else {
    //         originChildren[n].children = []
    //       }
    //       hasrouters.push(originChildren[n])
    //     }
    //   }
    // })
    const result = [
      {
        path: '/',
        name: 'layout',
        redirect: originChildren[0].path,
        component: Home,
        children: originChildren
      }
    ]
    resolve(result)
  })
}
export default getUserRouter
