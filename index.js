// Http Modules
// Sử dụng HTTP tạo SERVER 

// -------------------------------------------------
let http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
      res.writeHead(200, {
        "Context-type" : "text/html"
      });
      res.write('This is a response for a request')
      res.write(` Your url is ${req.url}`);
      res.write(` Your url is ${require('url').parse(req.url,true)}`);
      // http://localhost:3000/thanh?name=uyen&tuoi=20 
      // > JSON.stringify(require('url').parse(req.url,true).query.name)
      // output "uyen"'
      // JSON.stringify(obj) chuyển obj về dạng chuỗi 
      // require('url') là module chuyển để xử lý các url
      debugger; // Dùng để kiểm tra đầu ra của các giá trị trên là như thế nào 
      res.end();   // Phải có res.end() không sẽ gửi req hoài không dừng
    }).listen(port);
console.log(`Server is running at Port ${port}`);
