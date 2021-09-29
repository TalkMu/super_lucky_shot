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
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list:[
      {
        pagePath:"pages/home/home",
        iconPath:"assets/tab_bar/home.png",
        selectedIconPath:"assets/tab_bar/home_selected.png",
        text:"首页"
      },
      {
        pagePath:"pages/me/me",
        iconPath:"assets/tab_bar/me.png",
        selectedIconPath:"assets/tab_bar/me_selected.png",
        text:"我的"
      }
    ],
  }
}
