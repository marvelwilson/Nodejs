// npm - global command, comes with node
// npm --version


// local dependacy - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (MAC)


// package.json - manifest file {stores important info about project/package}
// manual approach {created package.json in the root, create properties etc}
// npm init -y (everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)