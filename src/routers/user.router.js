const { Router } = require("express");
const {
  findAllUser,
  findUserDetail,
  createUser,
  updateUser,
  removeUser,
  uploadAvatar,
} = require("../controllers/user.controller");
const {
  authentication,
  authorize,
} = require("../middleware/Auth/Verify-token.middlewares");
const {
  uploadImageSingle,
} = require("../middleware/Upload/upload-images.middlewares");
const {
  checkExist,
} = require("../middleware/Validation/Check-exist.middlewares");
const userRouter = Router();

const { User } = require("../models");

// http://localhost:7000/api/v1/users/upload-avatar
userRouter.post(
  "/upload-avatar",
  authentication,
  uploadImageSingle("avatar"),
  uploadAvatar
); //Gọi hàm để return đc upload.single           //nên ghi ở trên vì ghi dưới maybe bị trùng :id

// http://localhost:7000/api/v1/users
userRouter.get("/", findAllUser);
// http://localhost:7000/api/v1/users/:id
userRouter.get("/:id", checkExist(User), findUserDetail);
// http://localhost:7000/api/v1/users
userRouter.post("/", createUser);
// http://localhost:7000/api/v1/users/:id
userRouter.put("/:id", checkExist(User), updateUser);
// http://localhost:7000/api/v1/users/:id
userRouter.delete(
  "/:id",
  authentication,
  authorize("ADMIN"),
  checkExist(User),
  removeUser
);

module.exports = {
  userRouter,
};
