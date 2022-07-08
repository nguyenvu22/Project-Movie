const multer = require("multer")
const { getExtensionFFile } = require("../../utils/get-extension-file")

const uploadImageSingle = (type) => {
    const storage = multer.diskStorage({
        //đường dẫn thư mục để lưu
        destination: (req, file, cb) => {
            cb(null, `./Public/images/${type}`)                     //bắt đầu ở public vì đã có __dirname ở index.js ==> bắt đầu ở index.js
        },

        //setup tên file gửi lên
        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname)         //lấy luôn tên đuôi file (vd: jpg)
        },
    })

    //Có try catch lỗi
    const upload = multer({ storage, fileFilter: (req, file, cb) => {
        const extensionImageList = ["png", "jpg", "jpeg", "gif", "webp"]            //user gửi lên đúng mới cho upload
        const extensionFile = getExtensionFFile(file.originalname)                  //Lấy đuôi file đc gửi lên
        if(extensionImageList.includes(extensionFile)){                             //So sánh -đuôi file đc gửi lên- với -đuôi mẫu-
            cb(null, true)
        }else{
            cb(new Error("extension ko hợp lệ"))
        }
    } })
    return upload.single(type)          //Chỉ up 1 hình duy nhất    
    //return upload.array(type, 20)          //up n hình tùy số lượng muốn    

    //Tên quy định sao thì dưới font-end phải gửi lên đúng cái avatar thì mới nhận đc (postman)
}








module.exports = {
    uploadImageSingle,
}



