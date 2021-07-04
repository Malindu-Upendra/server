const express = require('express');
const tempKeynotes = require("../model/tempkeynotes");
const tempConferenceTracks = require("../model/tempConferenceTracks");
const tempImportance = require("../model/tempImportanceDates");
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');

const router = express.Router();

router.put('/updateImportantDates',async (req,res) => {

    const body = req.body;
    console.log(body);

    try {

        await tempImportance.findByIdAndUpdate({_id:body.id},{dates:body.dates,description:body.description,approval:'Not Approved'})
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getSpecificDate/:id',async (req,res) => {

    const id = req.params.id;

    try{
        const info = await tempImportance.findOne({_id:id});
        res.send({data:info,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.put('/updateConferenceTracks',async(req,res) => {

    const body = req.body;

    try{
        await tempConferenceTracks.findByIdAndUpdate({_id:body.id},{heading:body.heading,description:body.description,approval:'Not Approved'})
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getSpecificConferenceTrack/:id',async (req,res)=>{

    const id = req.params.id;

    try{
        const info = await tempConferenceTracks.findOne({_id:id});
        res.send({data:info,success:true});
    }catch (e) {
        console.log(e);
    }

})

router.put('/updateKeynote',upload.single("image"),async (req,res) => {

    try{
        await cloudinary.uploader.destroy(req.body.cloudinaryID);

        const result = await cloudinary.uploader.upload(req.file.path);

        const id = req.body.id
        const title = req.body.title
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const university = req.body.university
        const description = req.body.description
        const speakerImg = result.url
        const cloudinaryID = result.public_id
        const approval = 'Not Approved'

        await tempKeynotes.findByIdAndUpdate({_id:id},{
            title:title,
            firstname:firstname,
            lastname:lastname,
            university:university,
            description:description,
            speakerImg:speakerImg,
            cloudinaryID:cloudinaryID,
            approval:approval});

        res.send({success:'true',message:"Successfully keynote updated"});
    }catch (e) {
        console.log(e);
    }

})

router.get('/getSpecificKeynote/:id',async (req,res) => {

    const id = req.params.id;

    try{
       const info = await tempKeynotes.findOne({_id:id});
       res.send({data:info,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getConferenceTracks',async (req,res) =>{

    try {
        const conDetails = await tempConferenceTracks.find();
        res.status(200).json(conDetails);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.get('/getKeynotes',async (req,res) =>{

    try {
        const conDetails = await tempKeynotes.find();
        res.status(200).json(conDetails);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.get('/getImportantDates',async (req,res) =>{

    try {
        const conDetails = await tempImportance.find();
        res.status(200).json(conDetails);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.post('/keynotes', upload.single("image"),async (req,res)=>{
    const body = req.body;

    try{
    const result = await cloudinary.uploader.upload(req.file.path);

    const tempKeynote = new tempKeynotes({

        title:req.body.title,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        university:req.body.university,
        description:req.body.description,
        speakerImg:result.url,
        cloudinaryID:result.public_id

     });

       await tempKeynote.save();
       res.send({success:'true',message:"Successfully keynote inserted"});
    }catch (e) {
        console.log(e);
    }
})

router.post('/addConferenceTracksForm',async (req,res)=>{
    const body =req.body;
    const tempConferenceTrack= new tempConferenceTracks(body);
    try {
        await tempConferenceTrack.save();
        res.send({success:'true',message:"Successfully conference Tracked Inserted"});
    }catch (e){
        console.log(e);
    }

})

router.post('/importantDatesForm',async (req,res)=>{
    const body =req.body;
    const tempImportantDate = new tempImportance(body);
    try {
        await tempImportantDate.save();
        res.send({success:'true',message:"Successfully important Dates form Inserted"});
    }catch (e){
        console.log(e);
    }

})

module.exports = router;