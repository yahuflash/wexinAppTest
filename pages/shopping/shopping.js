//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://n.sinaimg.cn/tech/transform/w640h320/20171227/tpwe-fypyuvc5492510.jpg',
      'http://n.sinaimg.cn/tech/transform/w640h320/20171225/-hud-fypyuva8367676.jpg',
      'http://n.sinaimg.cn/tech/transform/w640h320/20171227/Ik0r-fypyuvc5445117.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'点餐',
        url:'dishes'
      },
      {
        name:'饮料',
        url:'take',
        isSplot:true
      },
      {
        name:'外带',
        url:'out'
      },
      {
        name:'订单',
        url:'bill'
      },
      {
        name:'帐单',
        url:'bill',
        isSplot:true
      },
      {
        name:'报表',
        url:'bill'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
