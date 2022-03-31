const url = {
	login(data) {
		return request({
			url: '/user/login',
			method: 'post',
			data
		})
	},
	getInfo(token) {
		return request({
			url: '/user/info',
			method: 'get',
			params: {
				token
			}
		})
	},
	logout() {
		return request({
			url: '/user/logout',
			method: 'post'
		})
	},
	getHeaderData() {
		return request({
			url: '/zlb/getExternalHeader',
			method: 'get',
		})
	}
};
const nihao = "nihao"
export {url,nihao};
