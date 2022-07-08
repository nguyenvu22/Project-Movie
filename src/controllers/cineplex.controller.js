const { Cineplex } = require("../models")

const findAllCineplex = async (req, res) => {
    try {
        const cineplexList = await Cineplex.findAll({
            attributes: [
                "id",
                "name",
                "logo"
            ]
        });
        res.status(200).send(cineplexList);
    } catch (error) {
        res.status(500).send(error)
    }
}

const findCineplexDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const cineplexDetail = await Cineplex.findByPk(id);
        res.status(200).send(cineplexDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const createCineplex = async (req, res) => {
    try {
        const { name, logo } = req.body;
        const newCineplex = Cineplex.build({ name, logo })
        await newCineplex.save();
        res.status(201).send(newCineplex);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateCineplex = async (req, res) => {
    try {
        const { id } =  req.params;
        const { name, logo } = req.body;

        Cineplex.update({ name, logo }, {
            where : {
                id
            }
        });
        const cineplexDetail = await Cineplex.findByPk(id);
        res.status(200).send(cineplexDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeCineplex = async (req, res) => {
    try {
        const { id } =  req.params;
        const cineplexDetail = await Cineplex.findByPk(id);
        await Cineplex.destroy({
            where : {
                id
            }
        });
        res.status(200).send(cineplexDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    findAllCineplex,
    findCineplexDetail,
    createCineplex,
    updateCineplex,
    removeCineplex
}
