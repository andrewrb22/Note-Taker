const db = require ("../db")
const store = require("../db/store")

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/db", function(req, res) {
      res.json(db);
    });
  
    app.get("/api/store", function(req, res) {
      res.json(store);
    });
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/db", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware
      if (db.length < 5) {
        db.push(req.body);
        res.json(true);
      }
      else {
        store.push(req.body);
        res.json(false);
      }
    });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      db.length = 0;
      store.length = 0;
  
      res.json({ ok: true });
    });
  };