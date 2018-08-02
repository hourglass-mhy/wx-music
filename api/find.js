const fetch = require('../utils/fetch.js')
const baseUrl = 'http://localhost:3000'
// 获取个性歌单
function getPersonalized (params) {
	return fetch(baseUrl + '/personalized', params)
}
module.exports = { 
	getPersonalized 
}
