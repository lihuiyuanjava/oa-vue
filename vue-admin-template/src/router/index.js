import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 素材管理
/*  {
    path: '/material',
    component: Layout,
    redirect: '/material/upload',
    meta: {
      /!*title: '素材管理',*!/
      icon: 'plane'
    },
    children: [{
        path: 'check-template',
        name: 'check-template',
        component: () => import('@/views/material/check-template'),
        meta: {
          title: '查看模板',
        }
      }],
    /!*{
      path: 'logo',
      name: 'logo',
      component: () => import('@/views/material/check-logo'),
      meta: {
        title: '查看logo',
      }
    },
    {
      path: 'generate',
      name: 'generate',
      component: () => import('@/views/material/generate'),
      meta: {
        title: '生成素材',
      }
    },
    {
      path: '/test',  //url路径
      component: Layout, // 此处不用动，这个全局统一的一个布局文件
      children: [{
        path: 'test',  // 二级路径
        name: 'test',
        component: () => import('@/views/test/test'), // 懒加载，此处写所添加文件的路径
        meta: {
          title: '测试', icon:'plane' //配置选项可配置测试名称和图标
        }
      }]
    },
    {
      path: 'check',
      name: 'check',
      component: () => import('@/views/material/check'),
      meta: {
        title: '查看素材',
      }
    },
  ]*!/
  },*/
  //测试页面
  /*{
    path: '/',
    component: Layout,
    children: [{
      path: 'test',
      name: 'test',
      component: () => import('@/views/test/test'),
      meta: {
        title: '测试',
      }
    }]
  },*/
    {
    // path: '/X.commodity/listCommodity',
    path: '/',
    component: Layout,
    children: [{
      path: 'listCommodity',
      name: 'listCommodity',
      component: () => import('@/views/X.commodity/listCommodity'),
      meta: {
        title: '商品管理',
      }
    }]
  },
  {
    path: '/Z.invoice/listInvoice',
    component: Layout,
    children: [{
      path: 'listInvoice',
      name: 'listInvoice',
      component: () => import('@/views/Z.invoice/listInvoice'),
      meta: {
        title: '发票管理',
      }
    }]
  },
  {
    path: '/Z.inventory/listInventory',
    component: Layout,
    children: [{
      path: 'listInventory',
      name: 'listInventory',
      component: () => import('@/views/Z.inventory/listInventory'),
      meta: {
        title: '库存管理',
      }
    }]
  },
  {
    path: '/Z.supplier/listSupplier',
    component: Layout,
    children: [{
      path: 'listSupplier',
      name: 'listSupplier',
      component: () => import('@/views/Z.supplier/listSupplier'),
      meta: {
        title: '供应商管理',
      }
    }]
  },

  {
    path: '/L.order/listOrder',
    component: Layout,
    children: [{
      path: 'listOrder',
      name: 'listOrder',
      component: () => import('@/views/L.order/listOrder'),
      meta: {
        title: '订单管理',
      }
    }]
  },
  {
    path: '/X.purchase/listPurchase',
    component: Layout,
    children: [{
      path: 'listPurchase',
      name: 'listPurchase',
      component: () => import('@/views/X.purchase/listPurchase'),
      meta: {
        title: '采购管理',
      }
    }]
  },
  {
    path: '/X.salesman/listSalesman',
    component: Layout,
    children: [{
      path: 'listSalesman',
      name: 'listSalesman',
      component: () => import('@/views/X.salesman/listSalesman'),
      meta: {
        title: '业务员管理',
      }
    }]
  },
  {
    path: '/L.refund/listRefund',
    component: Layout,
    children: [{
      path: 'listRefund',
      name: 'listRefund',
      component: () => import('@/views/L.refund/listRefund'),
      meta: {
        title: '业务员管理',
      }
    }]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
