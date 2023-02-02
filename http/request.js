/**
 * @param {String} url 请求地址
 * @param {String} method 请求方法
 * @param {Object} data 请求数据
 * @param {Object} option 请求额外选项
 * 		@param {Number} contentType 请求内容类型 1=json 2=form
 * 		@param {Boolean} alertErrMsg 是否提示错误消息
 * 		@param {String} toastIcon 错误消息提示图标
 * 		@param {Number} duration 错误消息提示时长
 */
function request({ url, method = 'GET', data, option = {} }) {
	const extra = {
		contentType: 1,
		alertErrMsg: true,
		toastIcon: 'none',
		duration: 1500
	}
	Object.assign(extra, option)

	let header = {
		'content-type': extra.contentType === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
	}
	return new Promise((resolve, reject) => {
		const requestTask = uni.request({
			url: url,
			method: method,
			header: header,
			data: data,
			success(response) {
				let code = response.data.code || 200
				if (code === 200) {
					resolve(response)
				} else {
					console.log(url, data, response)
					if (extra.alertErrMsg) {
						uni.showToast({
							title: response.data.message,
							icon: extra.toastIcon,
							duration: extra.duration
						})
						reject(response)
					}
				}
			},
			fail(error) {
				uni.showToast({
					title: errror.message,
					icon: extra.toastIcon,
					duration: extra.duration
				})
				reject(error)
			}
		})
	})
}

export default request
