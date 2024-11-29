const express = require("express");
const router = express.Router();
const db = require("../db");
const Todo = require("../models/todo");

// create a new Todo
router.post("/", (req, res) => {
  console.log("body is : \n", req.body);
  const { id, todoItem, isComplete } = req.body;
  const sql = "INSERT INTO todos (id, todoItem, isComplete) VALUES(?, ?, ?)";
  console.log("sql query : \n", sql);
  db.run(sql, [id, todoItem, isComplete], (err) => {
    if (err) {
      console.log("SQLite error :", err.message);
      res.status(500).json({ error: err.message });
    } else {
      console.log("todo added :\n", { id, todoItem, isComplete });
      res.json({
        message: `Todo ${id}, "${todoItem}", ${isComplete} created successfully`,
      });
    }
  });
});

// get all todos
router.get("/", (req, res) => {
  const sql = "SELECT * FROM todos";
  db.all(sql, [], (err, rows) => {
    // console.log("rows ", rows);
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const todos = rows.map(
        (row) => new Todo(row.id, row.todoItem, row.isComplete)
      );
      res.json(todos);
    }
  });
});

// get only active todos
router.get("/active", (req, res) => {
  const sql = "SELECT * FROM todos WHERE isComplete = false";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const todos = rows.map(
        (row) => new Todo(row.id, row.todoItem, row.isComplete)
      );
      res.json(todos);
    }
  });
});

// get only completed todos
router.get("/completed", (req, res) => {
  const sql = "SELECT * FROM todos WHERE isComplete = true";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const todos = rows.map(
        (row) => new Todo(row.id, row.todoItem, row.isComplete)
      );
      res.json(todos);
    }
  });
});

// clear completed todos only
router.get("/clear-completed", (req, res) => {
  const sql = "DELETE FROM todos WHERE isComplete = true";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Cleared completed todos." });
    }
  });
});

module.exports = router;
