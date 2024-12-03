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
      const todos = [...rows]
        .slice() // create shallow copy of array without modifying original array
        .reverse()
        .map(
          (row) => new Todo(row.id, row.todoItem, row.isComplete ? true : false)
        );
      res.json(todos);
    }
  });
});

// clear completed todos based on ids
router.post("/clear-completed", (req, res) => {
  let { completedTodoIds } = req.body;
  let completedIds = Object.values(completedTodoIds);
  console.log("completed todo ids \n", completedIds);

  const sql = "DELETE FROM todos WHERE id = ? ";
  let deletedCount = 0;
  completedIds.forEach((id, index) =>
    db.run(sql, [id], (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        deletedCount++;
        if (deletedCount === completedIds.length) {
          res.json({ message: "Deleted completed todos!" });
        }
      }
    })
  );
});

module.exports = router;
