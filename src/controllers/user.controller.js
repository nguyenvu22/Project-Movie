const { configEnv } = require("../config");
const { User } = require("../models")
const bcryptjs = require("bcryptjs")

const userList = [
    {
        id: 1,
        name: "iron man",
        email: "ironman@gmail.com",
        password: "123456",
        phone: "0906918521",
        role: "ADMIN"
    },
    {
        id: 2,
        name: "spider man",
        email: "spiderman@gmail.com",
        password: "123456",
        phone: "0906918521",
        role: "CLIENT"
    },
]

const findAllUser = async (req, res) => {
    try{
        const userList = await User.findAll({
            attributes: [
                "id",
                "name",
                "email",
                "role",
                "createdAt",
                "updatedAt"

                // exclude: ["password"]
            ]
        });
        res.status(200).send(userList);
    }catch(error){
        res.status(500).send(error)
    }
}

const findUserDetail = async (req, res) => {
    try{
        const { id } = req.params;

            //ko connect db
        // const user = userList.find( (item) => item.id === +id )
        // if(user){
        //     res.status(200).send(user)
        // }else{
        //     res.status(404).send("Id not exist !!");
        // }

            //có connect db
        const detailUser = await User.findByPk(id);
        res.status(200).send(detailUser);
    }catch(error){
        res.status(500).send(error);
    }
}

const createUser = async (req, res) => { 
    try{    
        const { name, email, password, phone, role } = req.body;
        
        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);

            //ko connect db
        // const newUser = { name, email, password, phone, role, id: Math.random() }
        // userList.push(newUser);
        // res.status(201).send(newUser);

            //có connect db
        const newUser = User.build({ name, email, password: hashPassword, phone, role })
        await newUser.save();
        res.status(201).send(newUser);

            // C2
        // const newUser = await User.create({ name, email, password, phone, role })
        

    }catch(error){
        res.status(500).send(error);
    }
}

const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, password, phone, role } = req.body;

        User.update({ name, password, phone, role }, {
            where : {
                id,      //id : id         //Lấy column id so với id lấy từ font-end
            }
        })
        const detailUser = await User.findByPk(id);
        res.status(200).send(detailUser)
    }catch(error){
        res.status(500).send(error);
    }
}

const removeUser = async (req, res) => {
    try{
        const { id } = req.params;
        const detailUser = await User.findByPk(id);
        await User.destroy({
            where: {
                id,
            }
        })
        res.status(200).send(detailUser)            //return về user đã bị xóa
    }catch(error){
        res.status(500).send(error);
    }
}


const uploadAvatar = async (req, res) => {
    const { user, file } = req

    const urlImage = configEnv.server.host + file.path                   //.path trong file lúc req

    const userUploadAvatar = await User.findByPk(user.id)
    userUploadAvatar.avatar = urlImage
    await userUploadAvatar.save()
    res.status(200).send(userUploadAvatar)
}


module.exports = {
    findAllUser,
    findUserDetail,
    createUser,
    updateUser,
    removeUser,
    uploadAvatar
}