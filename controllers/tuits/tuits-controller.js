import posts from "./tuits.js"

let tuits = posts

const createTuit = (req, res) => {
    const newTuit = req.body;
    tuits.push(newTuit);
    res.send(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits)
}

const updateTuit = (req, res) => {
    let tuitId = req.params["tid"]
    tuitId = parseInt(tuitId)
    const updates = req.body;
    tuits = tuits.map(tuit => tuit._id === tuitId ? {...tuit, ...updates} : tuit);
    res.send(200);
}

const deleteTuit = (req, res) => {
    let tuitId = req.params['tid']
    tuitId = parseInt(tuitId)
    tuits = tuits.filter(tuit => tuit._id !== tuitId)
    res.send(200)
}


export default  (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


