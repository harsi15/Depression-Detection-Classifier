const express =require('express');

const router =express.Router();

const Post = require('../models/Post');

router.get('/',(req,res)=>{
    res.send('We are on posts');
});

router.post('/',(req,res)=>{
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        age: req.body.gender
    });

    post.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message: err});
    })
});

module.exports =router;