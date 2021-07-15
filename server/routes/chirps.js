const express = require('express');
const chirpsStore = require('../filestore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

//this will update a chirp
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;

    //id = req.body.user
    //text.msg = req.body.text
    if (!id) {
       return res.sendStatus(200);
   } else {
        chirpsStore.UpdateChirp(id, chirp); 
   }
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    //let chirp = req.body;

    if (!id) {
        return res.status(404).json({});
    } else {
        chirpsStore.DeleteChirp(id); 
    }
});

module.exports = router;