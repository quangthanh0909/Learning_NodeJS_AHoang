
// ------------------READ / WRITE FILE --------------------------------
const fileManager = require('./fileManager');
const fileName = __dirname + "/data/tempt.txt";
console.log(fileName);
    // Output : D:\00.DEVDOCS\backEnd\NodeJS\NguyenDucHoang/data/tempt.txt
fileManager.createNewFile(fileName);
let data = [
  { name: "Thanh", age: 15 },
  { name: "Uyen", age: 16 },
  { name: "Quang", age: 14 },
  { name: "Tram", age: 12 },
  { name: "Nguyen", age: 11 }
]
fileManager.saveJsonObjectToFile(data, fileName);
fileManager.readDataFromFile(fileName);

// --------------fileManager.js------------------------------------------
const fs = require('fs');
module.exports = {
  createNewFile: (fileName) => {
    fs.openSync(fileName, 'w')
  },
  saveJsonObjectToFile: (Object, fileName) => {
    const objectJson = JSON.stringify(Object);
    fs.writeFile(fileName, objectJson, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(`Saved file to ${fileName}`);
    })
  },
  readDataFromFile: (fileName) => {
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      const jsonObect = JSON.parse(data);
      console.log("Read file success! ");
      console.log(jsonObect);
    })
  }
}
