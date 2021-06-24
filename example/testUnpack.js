const { unpack } = require("../__COMMANDS__/unpack")
const pkg = require('./package.json')

unpack(__dirname, pkg)