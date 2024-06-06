const path = require('path');
const fs = require('fs');
const solc = require('solc');
const filetPath = path.resolve(__dirname,'contracts','lottery.sol');
const source = fs.readFileSync(filePath,'utf8');
module.exports = solc.compile(source,1);