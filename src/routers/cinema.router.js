const { Router } = require("express");
const {
  findAllCinema,
  findCinemaDetail,
  createCinema,
  updateCinema,
  removeCinema
} = require("../controllers/cinemas.controller");
const { checkExist } = require("../middleware/Validation/Check-exist.middlewares");
const { Cinema } = require("../models")

const cinemasRouter = Router();

// http://localhost:7000/api/v1/cinemas/cinema-includes-cineplex
// cinemasRouter.get("/cinema-includes-cineplex", getListCinema);
cinemasRouter.get("/", findAllCinema);
// http://localhost:7000/api/v1/cinemas/id
cinemasRouter.get("/:id", checkExist(Cinema), findCinemaDetail);
// http://localhost:7000/api/v1/cinemas
cinemasRouter.post("/", createCinema);
// http://localhost:7000/api/v1/cinemas/id
cinemasRouter.put("/:id", checkExist(Cinema),updateCinema);
// http://localhost:7000/api/v1/cinemas/id
cinemasRouter.delete("/:id", checkExist(Cinema), removeCinema)

module.exports = {
  cinemasRouter,
};
