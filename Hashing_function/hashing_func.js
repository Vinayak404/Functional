let hashF = require('../Hashing_function/hashing_funcBL')
const fs = require('fs')
N = fs.readFileSync('../Hashing_function/fileDS3.txt')
console.log(N)
hashF.HF(N)