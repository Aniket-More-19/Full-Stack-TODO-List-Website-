const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("todo.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to SQLite database");

    db.run(
      `CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY, todoItem TEXT NOT NULL , isComplete BOOLEAN NOT NULL)`,
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("todos table created successfully");
        }
      }
    );
  }
});

module.exports = db;
