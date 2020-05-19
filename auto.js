//      自动修改文件
console.log('------B E G I N--------')
let fs = require('fs')
let Read = require('./File/file-helper')
let baseAppUrl = 'f:/exs/src'
let judgeIsImport = function (file) {
   return /import\s+NavGap/g.test(file)
}

let pagesList = fs.readFile('f:/exs/src/app.js','utf-8',function (err,data) {
         let str = data.toString();
         let result =  str.match(/pages:\s*\[(\n|.|\s|\r|\t)*]/g)
         console.log(result)
})
let resolve = function (url) {
    if(/\.js$/.test(url)){
        fs.readFile(url,'utf-8',function (err,data) {
            let string = data.toString();
               if(!/import\s+NavGap/g.test(string)){

               }
        })
    }
}











