const express = require('express');
const { rootRouter } = require('./src/routers/root.router');
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const { configEnv } = require('./src/config');

dotenv.config();

// Setup định dạng body thành JSON
app.use(express.json())

//  http://localhost:7000/hello
app.get("/hello", (req, res) => {
    res.send("Hello NodeJS");
});


// Setup static file
const pathPublicDirectory = path.join(__dirname, "./public")        //=> Lấy đường dẫn tới folder hiện tại của mình
// => C:\Users\Admin\Desktop\CyberSoft\Node Node Node Jss\project-movie
// => C:\Users\Admin\Desktop\CyberSoft\Node Node Node Jss\project-movie/public
// //http://localhost:7000/public  <==> folder public
app.use("/public", express.static(pathPublicDirectory))                        //Nơi chứa tài nguyên (client truy cập đc)



//http://localhost:7000/api/v1
app.use("/api/v1", rootRouter);

//  http://localhost:7000
// const port = process.env.PORT;                       //.env
const port = configEnv.server.port                      //config.json


app.listen(port, () => {
    console.log("App run on port : " + port);
})