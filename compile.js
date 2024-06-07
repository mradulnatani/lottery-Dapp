
const path = require('path');
const fs = require('fs');
const solc = require('solc');
const lotteryPath = path.resolve(__dirname,'contracts','lottery.sol');
const source = fs.readFileSync(lotteryPath,'utf8');
module.exports =solc.compile(source,1).contracts[':lottery'];
/*
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'lottery.sol');
const source = fs.readFileSync(contractPath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'lottery.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
*/