const { Showtime } = require("../models")

const findAllShowtime = async (req, res) => {
    try {
        const showtimeList = await Showtime.findAll({
            attributes: [
                "id",
                "startTime",
                "cinemaId"
            ]
        });
        res.status(200).send(showtimeList);
    } catch (error) {
        res.status(500).send(error)
    }
}

const findShowtimeDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const showtimeDetail = await Showtime.findByPk(id);
        res.status(200).send(showtimeDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const createShowtime = async (req, res) => {
    try {
        const { startTime, cinemaId } = req.body;
        const newShowtime = Showtime.build({ startTime, cinemaId })
        await newShowtime.save();
        res.status(201).send(newShowtime);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateShowtime = async (req, res) => {
    try {
        const { id } =  req.params;
        const { startTime, cinemaId } = req.body;

        Showtime.update({ startTime, cinemaId }, {
            where : {
                id
            }
        });
        const showtimeDetail = await Showtime.findByPk(id);
        res.status(200).send(showtimeDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeShowtime = async (req, res) => {
    try {
        const { id } =  req.params;
        const showtimeDetail = await Showtime.findByPk(id);
        await Showtime.destroy({
            where : {
                id
            }
        });
        res.status(200).send(showtimeDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    findAllShowtime,
    findShowtimeDetail,
    createShowtime,
    updateShowtime,
    removeShowtime
}
