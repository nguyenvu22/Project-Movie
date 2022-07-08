const { Router } = require("express");
const {
  findAllSeat,
  findSeatDetail,
  createSeat,
  updateSeat,
  removeSeat,
  seatListByInterest,
  bookSeat,
} = require("../controllers/seat.controller");
const {
  checkExist,
} = require("../middleware/Validation/Check-exist.middlewares");
const { Seat } = require("../models");

const seatsRouter = Router();

// http://localhost:7000/api/v1/seats
seatsRouter.get("/", findAllSeat);
// http://localhost:7000/api/v1/seats/id
seatsRouter.get("/:id", checkExist(Seat), findSeatDetail);
// http://localhost:7000/api/v1/seats
seatsRouter.post("/", createSeat);
// http://localhost:7000/api/v1/seats/id
seatsRouter.put("/:id", checkExist(Seat), updateSeat);
// http://localhost:7000/api/v1/seats/id
seatsRouter.delete("/:id", checkExist(Seat), removeSeat);
// http://localhost:7000/api/v1/seats/getseatbyshowtime/id
seatsRouter.get("/getseatbyshowtime/:id", seatListByInterest)
// http://localhost:7000/api/v1/seats/bookseat/id
seatsRouter.put("/bookseat/:id", bookSeat);

module.exports = {
  seatsRouter,
};
