// Tạo Module để Tạo File Mới, Ghi vào File, Đọc dữ liệu từ file ở dạng JSON

const fs = require('fs');
module.exports = {
  createNewFile: (fileName)=> {
    fs.openSync(fileName,'w')
  },
  saveJsonObjectToFile: (Object,fileName) => {
    const objectJson = JSON.stringify(Object);
    fs.writeFile(fileName,objectJson,'utf-8',(err,data) => {
      if(err) throw err;
      console.log(`Saved file to ${fileName}`);
    })
  },
  readDataFromFile: (fileName) => {
    fs.readFile(fileName,(err,data) => {
      if(err) throw err;
      console.log("Read file success! ");
      console.log(JSON.parse(data));
      
      
    })
  }

}
