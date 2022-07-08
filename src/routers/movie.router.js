const { Router } = require("express");
const {
  findAllMovie,
  findMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
  findShownMovie,
  findComingMovie,
  bookTicket,
  getInterestByCineplex
} = require("../controllers/movie.controller");
const { checkExist } = require("../middleware/Validation/Check-exist.middlewares");
const { Movie } = require("../models")

const moviesRouter = Router();

// http://localhost:7000/api/v1/movies
moviesRouter.get("/", findAllMovie);
// http://localhost:7000/api/v1/movies/id
moviesRouter.get("/:id", checkExist(Movie), findMovieDetail);
// http://localhost:7000/api/v1/movies/
moviesRouter.post("/", createMovie)
// http://localhost:7000/api/v1/movies/id
moviesRouter.put("/:id", checkExist(Movie), updateMovie)
// http://localhost:7000/api/v1/movies/id
moviesRouter.delete("/:id", checkExist(Movie), removeMovie)
// http://localhost:7000/api/v1/movies/shown_movie/shown
moviesRouter.get("/shown_movie/shown", findShownMovie)
// http://localhost:7000/api/v1/movies/coming_movie/coming
moviesRouter.get("/coming_movie/coming", findComingMovie)
// http://localhost:7000/api/v1/movies/book_ticket/booking
moviesRouter.get("/book_ticket/booking", bookTicket)
// http://localhost:7000/api/v1/movies/take_showtime_by_cineplex/id
moviesRouter.get("/take_showtime_by_cineplex/:id", checkExist(Movie), getInterestByCineplex)

module.exports = {
  moviesRouter,
};
