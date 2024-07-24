module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/setup.js'],
	
	moduleNameMapper: {
		'\\.(css|scss)': 'identity-obj-proxy',
		'\\.(png|svg|jpg)': '<rootDir>/file.config.js',
	},
};