const fs = require("fs");
const util = require("util");
const path = require("path");

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
            const newNote = {...note};
            notes.push(newNote);
            return this.saveNotes(notes).then(() => newNote);
        });
    }

    deleteNote(){

    }
}

module.exports = new Store;