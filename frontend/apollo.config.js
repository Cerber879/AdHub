require('dotenv/config')

module.exports = {
	service: {
		endpoint: {
			url: process.env.PUBLIC_SERVER_URL,
			skipSSLValidation: true
		}
	}
}