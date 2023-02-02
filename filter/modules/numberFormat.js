/**
 * 数字格式化：万、亿单位
 * @param {Number} value 需要格式化的数字
 * @returns {String} 返回格式化后的字符串
 */
export default function numberFormat(value) {
	if (!value && value !== 0) return ''

	if (isNaN(value)) return value
	else {
		let num = 10000
		let sizeUnit = ''
		if (value < 10000) {
			sizeUnit = ''
		} else if (value >= 10000 && value < 100000000) {
			sizeUnit = '万'
		} else if (value >= 100000000) {
			sizeUnit = '亿'
		}
		let i = Math.floor(Math.log(value) / Math.log(num))
		let size = ((value / Math.pow(num, i))).toFixed(0)
		return size + sizeUnit
	}
}
