const api = require('../../../api/find.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab (e) {
      console.log(e)
      this.setData({
        currentTab: Number(e.currentTarget.dataset.findCurrent)
      })
      if (this.data.currentTab === 0) {
        this.getgetPersonalizedList()
      }
    },
    // 获取个性歌单
    getgetPersonalizedList () {
      api.getPersonalized().then(res => {
        debugger
      }, err => {
        console.log('error', err)
      })
    }
  }
})
