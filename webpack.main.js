const path = require("path");

module.exports = () => {
	const public = path.resolve(__dirname, "./build");
	const config = {
		target: "electron-main",
		externals: {
			bufferutil: "bufferutil",
			"utf-8-validate": "utf-8-validate"
		},
		node: {
			__dirname: false
		},
		entry: {
			main: path.join(__dirname, "src", "index.js")
		},
		output: {
			path: public,
			filename: "[name].js"
		},
		resolve: {
			extensions: [".js"]
		}
	};

	return config;
};