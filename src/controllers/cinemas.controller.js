const { Cineplex, Cinema, sequelize } = require("../models")

//Demo
const getListCineplex = async (req, res) => {
    try {
        const cineplexList = await Cineplex.findAll({
            include: [
                {
                    model: Cineplex,              //link với model Cinema
                }
            ]
        })

        res.status(201).send(cineplexList)
    } catch (error) {
        res.status(500).send(error)
    }
}

//Demo
const getListCinema = async (req, res) => {
    try {
        // Liên kết với model 
        const querySql = `
            select * from Cinemas
        `
        const [results, metadata] = await sequelize.query(querySql)         //Bỏ đc metadata

        res.status(201).send([results, metadata])
    } catch (error) {
        res.status(500).send(error)
    }
}

const findAllCinema = async (req, res) => {
    try {
        const movieList = await Cinema.findAll();
        res.status(200).send(movieList);
    } catch (error) {
        res.status(500).send(error)
    }
}

const findCinemaDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const cinemaDetail = await Cinema.findByPk(id);
        res.status(200).send(cinemaDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const createCinema = async (req, res) => {
    try {
        const { name, address, image, cineplexId } = req.body;
        const newCinema = Cinema.build({ name, address, image, cineplexId })
        await newCinema.save();
        res.status(201).send(newCinema);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateCinema = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, image, cineplexId } = req.body;
        Cinema.update({ name, address, image, cineplexId }, {
            where : {
                id
            }
        });
        const cinemaDetail = await Cinema.findByPk(id);
        res.status(200).send(cinemaDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeCinema = async (req, res) => {
    try {
        const { id } = req.params;
        const cinemaDetail = await Cinema.findByPk(id);
        await Cinema.destroy({
            where : {
                id
            }
        });
        res.status(200).send(cinemaDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getListCineplex,
    getListCinema,
    findAllCinema,
    findCinemaDetail,
    createCinema,
    updateCinema,
    removeCinema
}
