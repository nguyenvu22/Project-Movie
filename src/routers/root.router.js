const { Router } = require("express");
const { authRouter } = require("./auth.routers");
const { cinemasRouter } = require("./cinema.router");
const { cineplexRouter } = require("./cineplex.router");
const { moviesRouter } = require("./movie.router");
const { newsRouter } = require("./news.router");
const { seatsRouter } = require("./seat.router");
const { showtimeRouter } = require("./showtime.router");
const { userRouter } = require("./user.router");
const rootRouter = Router();

// http://localhost:7000/api/v1/users
rootRouter.use("/users", userRouter)

// http://localhost:7000/api/v1/auth
rootRouter.use("/auth", authRouter)

// http://localhost:7000/api/v1/cinemas
rootRouter.use("/cinemas", cinemasRouter)

// http://localhost:7000/api/v1/movies
rootRouter.use("/movies", moviesRouter)

// http://localhost:7000/api/v1/seats
rootRouter.use("/seats", seatsRouter)

// http://localhost:7000/api/v1/showtimes
rootRouter.use("/showtimes", showtimeRouter)

// http://localhost:7000/api/v1/cineplexes
rootRouter.use("/cineplexes", cineplexRouter)

// http://localhost:7000/api/v1/news
rootRouter.use("/news", newsRouter)

module.exports = {
    rootRouter,
}

