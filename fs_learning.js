
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



