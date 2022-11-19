import posts from "./tuits.js"

let tuits = posts

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = new Date().getTime()+''
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits)
}

const updateTuit = (req, res) => {
    let tuitId = req.params["tid"]
    const updates = req.body;
    tuits = tuits.map(tuit => tuit._id === tuitId ? {...tuit, ...updates} : tuit);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    let tuitId = req.params['tid']
    tuitId = parseInt(tuitId)
    tuits = tuits.filter(tuit => parseInt(tuit._id) !== tuitId)
    res.sendStatus(200)
}


export default  (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


