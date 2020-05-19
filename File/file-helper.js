let fs = require('fs')

function openFile(url) {
     return  new Promise((resolve => {
         fs.readdir(url,'utf-8',function (err,data) {
               if(err){
                   console.log(err)
               }else {
                   resolve(data.toString())
               }
         })
     }))
}
module.exports = {
    openFile:openFile
}