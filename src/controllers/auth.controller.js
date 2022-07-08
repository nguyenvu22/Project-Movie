const { User } = require("../models")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {

    /*
        Mã hóa password :
            1/ Tạo chỗi ngẫu nhiên
            2/ Kết hợp : chuỗi ngẫu nhiên + password => HASH
    */

    try{    
        const { name, email, password, phone, role } = req.body;

        const salt = bcryptjs.genSaltSync(10);                      //tạo 10 ký tự mã hóa 
        const hashPassword = bcryptjs.hashSync(password, salt);     //chuỗi hash là kh của pass + salt

        const newUser = await User.create({ name, email, password : hashPassword, phone, role })
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send(error);
    }
}

const signIn = async (req, res) => {

     /*
        Đăng nhập :
            1/ tìm user theo email
            2/ so sánh password
    */

    try{
        const { email, password } = req.body;
        const userLogin = await User.findOne({
            where : {
                email,
            }
        })
        if(userLogin){
            const isAuth = bcryptjs.compareSync(password, userLogin.password)
            if(isAuth){

                /*
                    Tạo jsonwebtoken
                */
                const payload = {
                    id: userLogin.id,
                    email: userLogin.email,
                    role: userLogin.role,
                }
                const secretKey = "NgVu"
                const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 })                  //Tạo token

                res.status(200).send({
                    messages: "Đăng nhập thành công",
                    token,
                })
            }else{
                res.status(400).send({
                    messages: "Password ko chính xác"
                });
            }
        }else{
            res.status(404).send({
                messages: "Email ko chính xác"
            });
        }

    }catch(error){
        res.status(500).send(error);
    }

}

const resetPassword = async (req, res) => {
    try{
        const { email } = req.body;
        const passwordDefault = "abcdef"
        const userDetail = await User.findOne({
            where: {
                email
            }
        })
        if(userDetail){
            const salt = bcryptjs.genSaltSync(10); 
            const hashPassword = bcryptjs.hashSync(passwordDefault, salt);
            
            userDetail.password = hashPassword;     //cập nhật
            await userDetail.save()

            res.status(200).send({
                messages: "Reset pass thành công",
                newPassword: passwordDefault
            })
        }else{
            res.status(404).send({
                messages: "Email ko chính xác"
            });
        }
    }catch(error){
        res.status(500).send(error);
    }
}





module.exports = {
    signIn,
    signUp,
    resetPassword,
}


