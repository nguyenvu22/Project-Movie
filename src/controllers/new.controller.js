const { News } = require("../models")

const findAllNews = async (req, res) => {
    try {
        const newsList = await News.findAll({
            attributes: [
                "id",
                "title",
                "description",
                "image"
            ]
        })
        res.status(200).send(newsList)
    } catch (error) {
        res.status(500).send({ message: "No news here" })
    }
}

const findNewsDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const newsDetail = await News.findByPk(id);
        res.status(200).send(newsDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const createNews = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const newNews = News.build({ title, description, image });
        await newNews.save();
        res.status(201).send(newNews);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;

        News.update({ title, description, image }, {
            where : {
                id
            }
        });
        const newsDetail = await News.findByPk(id);
        res.status(200).send(newsDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeNews = async (req, res) => {
    try {
        const { id } = req.params;
        const newsDetail = await News.findByPk(id);
        await News.destroy({
            where: {
                id
            }
        });
        res.status(200).send(newsDetail);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    findAllNews,
    findNewsDetail,
    createNews,
    updateNews,
    removeNews
}