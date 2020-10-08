const path = require('path');

module.exports = function (app) {
    app.get("./", function(req,res){
        res.sendfile(path.joint(__dirname, "../public/index.html"))
    })
    app.get("./notes", function(req,res){
        res.sendfile(path.joint(__dirname, "../public/notes.html"))
    })
}