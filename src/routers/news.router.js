const { Router } = require("express");
const {
  findAllNews,
  findNewsDetail,
  createNews,
  updateNews,
  removeNews,
} = require("../controllers/new.controller");

const { checkExist } = require("../middleware/Validation/Check-exist.middlewares");
const { News } = require("../models")

const  newsRouter = Router();

// http://localhost:7000/api/v1/news/AllNews
newsRouter.get("/AllNews", findAllNews)
// http://localhost:7000/api/v1/news/NewsDetail/id
newsRouter.get("/NewsDetail/:id", checkExist(News), findNewsDetail)
// http://localhost:7000/api/v1/news/AddNews
newsRouter.post("/AddNews", createNews)
// http://localhost:7000/api/v1/news/UpdateNews/id
newsRouter.put("/UpdateNews/:id", checkExist(News), updateNews)
// http://localhost:7000/api/v1/news/DeleteNews/id
newsRouter.delete("/DeleteNews/:id", checkExist(News), removeNews)

module.exports = {
    newsRouter
}
