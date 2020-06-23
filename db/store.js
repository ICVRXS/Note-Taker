const fs = require("fs");
const util = require("util");
const path = require("path");
const {v1: uuidv1} = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const dbPath = path.join(__dirname, "../db/db.json");

class Store {

    read(){
        return readFileAsync(dbPath, "utf8");

    }

    write(content){
        return writeFileAsync(dbPath, content);
    }

    saveNotes(notes){
        return this.write(JSON.stringify(notes));
    }

    getNotes(){
        return this.read().then((data) => {
            return data
                ? JSON.parse(data)
                : [];
        });
    }

    addNote(note){
        return this.getNotes().then((notes) => {
            const newNote = {...note, id: uuidv1()};
            notes.push(newNote);
            return this.saveNotes(notes).then(() => newNote);
        });
    }

    deleteNote(noteId){
        return this.getNotes().then((notes) => {
            const newList = notes.filter((note) => note.id !== noteId);
            this.saveNotes(newList);
        });
    }
}

module.exports = new Store;