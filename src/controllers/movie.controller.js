const {
  Movie,
  Cinema_movie,
  Cinema,
  Showtime,
  sequelize,
} = require("../models");
const { Op, QueryTypes } = require("sequelize");

const findAllMovie = async (req, res) => {
  try {
    const movieList = await Movie.findAll({
      attributes: [
        "id",
        "name",
        "alias",
        "poster",
        "trailer",
        "duration",
        "description",
        "comingDate",
      ],
    });
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findMovieDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const movieDetail = await Movie.findByPk(id);
    res.status(200).send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovie = async (req, res) => {
  try {
    const { name, alias, poster, trailer, duration, description, comingDate } =
      req.body;
    const newMovie = Movie.build({
      name,
      alias,
      poster,
      trailer,
      duration,
      description,
      comingDate,
    });
    await newMovie.save();
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, alias, poster, trailer, duration, description, comingDate } =
      req.body;

    Movie.update(
      { name, alias, poster, trailer, duration, description, comingDate },
      {
        where: {
          id,
        },
      }
    );
    const movieDetail = await Movie.findByPk(id);
    res.status(200).send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movieDetail = await Movie.findByPk(id);
    await Movie.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findShownMovie = async (req, res) => {
  try {
    const today = new Date();
    const movieList = await Movie.findAll({
      where: {
        comingDate: { [Op.lte]: today },
      },
    });
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send({ message: "No movie is Shown" });
  }
};

const findComingMovie = async (req, res) => {
  try {
    const today = new Date();
    const movieList = await Movie.findAll({
      where: {
        comingDate: { [Op.gt]: today },
      },
    });
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send({ message: "No movie is Coming" });
  }
};

const bookTicket = async (req, res) => {
  try {
    const { movieName, cinemaName } = req.body;

    const querySql = `
        SELECT showtimes.startTime 
        FROM movies, cinema_movies, cinemas, showtimes
        WHERE movies.id = cinema_movies.movieId AND cinema_movies.cinemaId = cinemas.id 
          AND cinemas.id = showtimes.cinemaId AND movies.name LIKE :movieName AND cinemas.name LIKE :cinemaName
        GROUP BY movies.name, cinemas.name, showtimes.startTime
    `;

    const results = await sequelize.query(querySql, {
      replacements: {
        movieName: movieName,
        cinemaName: cinemaName,
      },
      type: QueryTypes.SELECT,
    });

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getInterestByCineplex = async (req, res) => {
  try {
    const { id } = req.params;
    const querySQL = `
      SELECT showtimes.startTime FROM showtimes, cinemas, cineplexes
      WHERE showtimes.cinemaId = cinemas.id AND cinemas.cineplexId = cineplexes.id AND cineplexes.id = :id
    `
    const results = await sequelize.query(querySQL, {
      replacements: {
        id: id
      },
      type: QueryTypes.SELECT
    })
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  findAllMovie,
  findMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
  findShownMovie,
  findComingMovie,
  bookTicket,
  getInterestByCineplex
};
