const fs = require('fs')
const path = require('path')

const disPath = path.resolve(__dirname, 'test.txt')
// const disPath = path.resolve(__dirname, '..', 'dist', 'test.txt') is also okey

console.log(disPath)
fs.writeFileSync(disPath, '../dist/test.txt')
// console.log('hello, node.js');
