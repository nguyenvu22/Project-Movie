const { Router } = require("express");
const {
  findAllShowtime,
  findShowtimeDetail,
  createShowtime,
  updateShowtime,
  removeShowtime,
} = require("../controllers/showtime.controller");
const { checkExist } = require("../middleware/Validation/Check-exist.middlewares");
const { Showtime } = require("../models")

const showtimeRouter = Router();

// http://localhost:7000/api/v1/showtimes
showtimeRouter.get("/", findAllShowtime)
// http://localhost:7000/api/v1/showtimes/id
showtimeRouter.get("/:id", checkExist(Showtime), findShowtimeDetail)
// http://localhost:7000/api/v1/showtimes/
showtimeRouter.post("/", createShowtime)
// http://localhost:7000/api/v1/showtimes/id
showtimeRouter.put("/:id", checkExist(Showtime), updateShowtime)
// http://localhost:7000/api/v1/showtimes/id
showtimeRouter.delete("/:id", checkExist(Showtime), removeShowtime)


module.exports = {
  showtimeRouter,
};
