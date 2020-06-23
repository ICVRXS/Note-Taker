const router = require("express").Router();
const store = require("./../db/store.js");

//Read Notes
router.get("/notes", (req, res) => {
    store.getNotes().then((notes) => {
        res.json(notes);
    });
});

//Create Notes
router.post("/notes", (req, res) => {
    store.addNote(req.body).then((note) => {
        console.log(note);
        res.json(note);
    })
    .catch((err) => {
        if (err) throw err;
    })
});

router.delete("/notes/:id", (req, res) => {
    store.deleteNote(req.params.id).then(() => res.json({ok: true}));
});

module.exports = router;