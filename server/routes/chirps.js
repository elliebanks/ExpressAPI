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

//post chirp
router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

//this will update a chirp
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;

    chirpsStore.UpdateChirp(id, chirp);
    return res.sendStatus(200);

});

//delete chirp
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    
    chirpsStore.DeleteChirp(id);
    return res.sendStatus(200);
});

module.exports = router;