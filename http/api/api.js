import request from '@/http/request.js'

/**
 * 轮播图
 * @param {Object} data 请求数据
 * 		@param {Number} type 设备类型(0:pc 1:android 2:iphone 3:ipad)
 */
export function api_Books(data) {
	return request({
		url: `https://shuapi.jiaston.com/top/${data.sexType}/top/${data.cateType}/${data.rankType}/${data.page}.html`,
		method: 'GET',
	})
}
