const { QueryTypes } = require("sequelize");
const { Seat, Showtime, sequelize } = require("../models");

const findAllSeat = async (req, res) => {
  try {
    const seatList = await Seat.findAll({
      attributes: ["id", "name", "status", "price", "type"],
    });
    res.status(200).send(seatList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findSeatDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const seatDetail = await Seat.findByPk(id);
    res.status(200).send(seatDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSeat = async (req, res) => {
  try {
    const { name, status, price, type, showtimeId } = req.body;

    const newSeat = Seat.build({ name, status, price, type, showtimeId });
    await newSeat.save();
    res.status(201).send(newSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status, price, type, showtimeId } = req.body;

    Seat.update(
      { name, status, price, type, showtimeId },
      {
        where: {
          id,
        },
      }
    );
    const seatDetail = await Seat.findByPk(id);
    res.status(200).send(seatDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const seatDetail = await Seat.findByPk(id);
    await Seat.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(seatDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const seatListByInterest = async (req, res) => {
  try {
    const { id } = req.params;
    const querySql = `
      SELECT seats.id, seats.name FROM seats, showtimes
      WHERE seats.showtimeId = showtimes.id AND showtimes.id = :id
    `
    const results = await sequelize.query(querySql, {
        replacements: {
          id: id
        },
        type: QueryTypes.SELECT
    })
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

//status = true : seat available
const bookSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const seat = await Seat.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (seat === null) {
      res.status(200).send({
        messsages: "This seat is already taken!!",
      });
      return;
    } else {
      Seat.update(
        {
          status: "false",
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).send(seat);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  findAllSeat,
  findSeatDetail,
  createSeat,
  updateSeat,
  removeSeat,
  seatListByInterest,
  bookSeat,
};
