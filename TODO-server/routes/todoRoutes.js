const express = require("express");
const router = express.Router();
const db = require("../db");
const Todo = require("../models/todo");

// create a new Todo
router.post("/", (req, res) => {
  const { id, text, isComplete } = req.body;
  const sql = "INSERT INTO todos (id, text, isComplete) VALUES(?, ?, ?)";
  db.run(sql, [id, text, isComplete], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: `Todo {} created successfully` });
    }
  });
});

// get all todos
router.get("/", (req, res) => {
  const sql = "SELECT * FROM todos";
  db.all(sql, [], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const todos = rows.map(
        (row) => new Todo(row.id, row.text, row.isComplete)
      );
      res.json(todos);
    }
  });
});

module.exports = router;
