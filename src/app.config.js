export default {
  pages: [
    'pages/home/home',
    'pages/me/me',
    'pages/save/save',
    'pages/take/take',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[
      {
        pagePath:"pages/home/home",
        text:"首页"
      },
      {
        pagePath:"pages/me/me",
        text:"我的"
      }
    ]
  }
}
