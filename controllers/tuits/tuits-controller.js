import * as tuitsDao from './tuits-dao.js'
const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    let tuitId = req.params["tid"]
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitId,
            updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    let tuitId = req.params['tid']
    const status = await tuitsDao
        .deleteTuit(tuitId);
    res.json(status);
}


export default  (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


