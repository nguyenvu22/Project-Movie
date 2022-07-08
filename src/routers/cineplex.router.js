const { Router } = require("express");
const {
  findAllCineplex,
  findCineplexDetail,
  createCineplex,
  updateCineplex,
  removeCineplex,
} = require("../controllers/cineplex.controller");
const { checkExist } = require("../middleware/Validation/Check-exist.middlewares");
const { Cineplex } = require("../models")

const cineplexRouter = Router();

// http://localhost:7000/api/v1/cineplexes
cineplexRouter.get("/", findAllCineplex);
// http://localhost:7000/api/v1/cineplexes/id
cineplexRouter.get("/:id", checkExist(Cineplex), findCineplexDetail)
// http://localhost:7000/api/v1/cineplexes
cineplexRouter.post("/", createCineplex)
// http://localhost:7000/api/v1/cineplexes/id
cineplexRouter.put("/:id", checkExist(Cineplex), updateCineplex)
// http://localhost:7000/api/v1/cineplexes/id
cineplexRouter.delete("/:id", checkExist(Cineplex), removeCineplex)

module.exports = {
  cineplexRouter,
};
