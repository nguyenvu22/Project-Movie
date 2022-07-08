const dotenv = require("dotenv")
dotenv.config();

const server = {
    port: process.env.PORT,
    host: process.env.HOST,
}










const configEnv = {
    server
}


module.exports = {
    configEnv,

} 