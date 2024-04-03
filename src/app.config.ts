export default defineAppConfig({
  pages: [
    'pages/login/mobile-login',
    'pages/login/wechat-login',
    'pages/index/index',
    'pages/user-center/index',
    'pages/home/index',
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
