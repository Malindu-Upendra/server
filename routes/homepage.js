const express = require('express');
const router = express.Router();
const TempKeynotes = require('../model/tempkeynotes.js');
const TempConferenceTracks = require('../model/tempConferenceTracks.js');
const TempImportantDates = require('../model/tempImportanceDates.js')
const Workshops = require('../model/workshop.js')
const Template = require('../model/template.js')

router.get('/getKeynotes',async (req,res) => {

    try {
        const keynotes = await TempKeynotes.find({ approval : 'Approved'}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getSpecificKeynote/:id',async (req,res) => {

    const id = req.params.id;

    try {
        const keynotes = await TempKeynotes.findOne({_id:id}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getConferenceTracks',async (req,res) => {

    try {
        const keynotes = await TempConferenceTracks.find({ approval : 'Approved'}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getImportantDates',async (req,res) => {

    try {
        const keynotes = await TempImportantDates.find({ approval : 'Approved'}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getWorkshops',async (req,res) => {

    try {
        const keynotes = await Workshops.find({ approval : 'Approved'}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getTemplates',async (req,res) => {

    try {
        const keynotes = await Template.find();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

module.exports = router;