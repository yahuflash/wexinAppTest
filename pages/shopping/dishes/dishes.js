var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    curNav: 1,
    curIndex: 0,
    cart: [],
    cartTotal: 0,
    navList: [
      {
        id: 1,
        name: '热销菜品'
      },
      {
        id: 2,
        name: '热菜'
      },
      {
        id: 3,
        name: '凉菜'
      },
      {
        id: 4,
        name: '套餐'
      }
    ],
    dishesList: [
      [
        {
          name: "红烧肉",
          price: 38,
          num: 1,
          id: 1
        },
        {
          name: "宫保鸡丁",
          price: 58,
          num: 1,
          id: 29
        },
        {
          name: "水煮鱼",
          price: 88,
          num: 1,
          id: 2
        }
      ],
      [
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 3
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 4
        }
      ],
      [
        {
          name: "大拌菜",
          price: 18,
          num: 1,
          id: 5
        },
        {
          name: "川北凉粉",
          price: 8,
          num: 1,
          id: 6
        }
      ],
      []
    ],
    dishes: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadingChange()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  loadingChange:function() {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 2000)
  },
  selectNav:function(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 选择菜品
  selectDish: function(event) {
    let dish = event.currentTarget.dataset.dish;
    let flag = true;
    let cart = this.data.cart;

    if (cart.length > 0) {
      cart.forEach(function (item, index) {
        if (item == dish) {
          cart.splice(index, 1);
          flag = false;
        }
      })
    }
    if (flag) cart.push(dish);
    this.setData({
      cartTotal: cart.length
    })
    this.setStatus(dish)
  },
  setStatus: function(dishId) {
    let dishes = this.data.dishesList;
    for (let dish of dishes) {
      dish.forEach((item) => {
        if (item.id == dishId) {
          item.status = !item.status || false
        }
      })
    }

    this.setData({
      dishesList: this.data.dishesList
    })
  },
})