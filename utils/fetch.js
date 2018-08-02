module.exports = function (url, params) {
	return new Promise((resolve, reject) => {
		wx.request({
			url: url,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
		})
	})
}