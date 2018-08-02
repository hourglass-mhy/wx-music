const api = require('../../../../api/find.js')
// component组件构造器
Component({
	// 组件的对外属性
	properties: {

	},
	// 组件的私有数据
	data: {
		personalizedList: []
	},
	// 组件生命周期函数 在组件实例进入页面节点树时执行
	ready: function () {
		this.getgetPersonalizedList() // 获取个性歌单li
	},
	methods: {
	// 获取个性歌单
    getgetPersonalizedList () {
      api.getPersonalized().then(res => {
      	if (res.data.code === 200) {
      		this.setData({
      			personalizedList: res.data.result
      		})
      	}
      }, err => {
        console.log('error', err)
      })
    }
	}
})