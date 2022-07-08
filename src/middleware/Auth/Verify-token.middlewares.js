const jwt = require("jsonwebtoken")


const authentication = (req, res, next) => {
    const token = req.header("token")
    
    try{
        const secretKey = process.env.SECRETKEY;
        const decode = jwt.verify(token, secretKey);

        //Tạo Key mới để có thể bóc tách ở các func tiêp theo
        req.user = decode;          // RES là 1 OBJJ -> Tạo 1 key mới cho OBJ (Key là user) -> Cập nhật value cho key mới là decode

        next();
    }catch(error){
        res.status(401).send({
            messages: "Bạn chưa đăng nhập"
        })
    }
}

const authorize = (arrayRole) => (req, res, next) => {
    const { user } = req
    if(arrayRole.includes(user.role)){
        next()
    }else{
        res.status(403).send({
            message: "Bạn đã đăng nhập nhưng ko đủ quyền hạn để xóa"
        })
    }
}



module.exports = {
    authentication,
    authorize,

}

