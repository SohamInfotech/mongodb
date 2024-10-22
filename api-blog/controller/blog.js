let blog = require('../model/blog')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { model } = require('mongoose')
const { token } = require('morgan')


exports.creat = async (req, res) => {
    const data = req.body
    try {
        const createdata = await blog.create(data)
        res.status(200).json({
            status: "success",
            Message: 'data enter succes',
            Data: createdata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not enter"
        })

    }
}
exports.show = async (req, res) => {
    const showdata = await Usermodal.find()

    try {
        res.status(200).json({
            status: "success",
            Message: 'all data show',
            Data: showdata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []
        })
    }
}


exports.delete = async (req, res) => {
    const deletid = req.params.id
    console.log("hrlooooo");

    console.log(deletid);
    await Usermodal.findByIdAndDelete(deletid)

    try {
        res.status(200).json({
            status: "success",
            Message: 'data delete',

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []

        })
    }

}


exports.edit = async (req, res) => {
    const edite = req.params.id
    console.log("hrlooooo");

    console.log(edite);
    await Usermodal.findByIdAndUpdate(edite, req.body)

    try {
        res.status(200).json({
            status: "success",
            Message: 'data update',

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []

        })
    }

}


