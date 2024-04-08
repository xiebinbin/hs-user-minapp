export default defineAppConfig({
  pages: [

    'pages/order/sub/doc-list',
    'pages/order/sub/dep-detail',
    'pages/order/sub/doc-detail',
    'pages/notice/list',
    'pages/notice/detail',
    'pages/order/choose-department',
    'pages/order/choose-hospital',
    'pages/order/sub/confirm-agreement',
    'pages/login/mobile-login',
    'pages/login/wechat-login',
    'pages/index/index',

    'pages/order/sub/order-record',
    'pages/order/sub/order-detail',
    'pages/order/sub/order-success',
    'pages/order/sub/confirm-expert',
    'pages/order/sub/confirm-simple',
    'pages/user-center/index',
    'pages/user-center/sub/member-edit',
    'pages/user-center/sub/member-detail',
    'pages/user-center/sub/member-list',
  ],
  tabBar: {
    list: [
      {
        iconPath: 'assets/images/tab-home.png',
        selectedIconPath: 'assets/images/tab-home-select.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        iconPath: 'assets/images/tab-mine.png',
        selectedIconPath: 'assets/images/tab-mine-select.png',
        pagePath: 'pages/user-center/index',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
