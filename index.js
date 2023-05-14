// Nạp express và lưu vào biến express
const express = require('express')
// Express lúc này là 1 function => Gọi dưới dạng chạy thực thi
const app = express()
// Thiết lập port để khởi chạy dự án
const port = 3000
// Định nghĩa route
app.get('/', (req, res) => {
  // Hiển thị câu lệnh trên trình duyệt
  var a = 1
  var b = 2
  var c = a + b
  res.send('Hello World!')
})
// 127.0.0.1 - localhost
app.listen(port, () => {
  // Log câu lệnh ở terminal khi run
  console.log(`Example app listening on port ${port}`)
})