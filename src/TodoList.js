import logo from './logo.svg';
import './App.css';

import React from 'react'
import { useState } from 'react'

function TodoList () {

  const [tasks, setTasks] = useState([
    ["task 1 title", "task 1 notes", "task 1 due date"],
    ["task 2 title", "task 2 notes", "task 2 due date"],
    ["task 3 title", "task 3 notes", "task 3 due date"]
  ]);

  const [title, setTitle] = useState('')
  const [addBox, setAddBox] = useState(false)
  const [notes, setNotes] = useState('')
  const [due, setDue] = useState('')
  const [editTitle, setEditTitle] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const [editDue, setEditDue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // New state to track editing task index

  function handleChange(e, target){
    if (target == "title") {
      setTitle(e.target.value)
    } else if (target == "notes") {
      setNotes(e.target.value)
    } else {
      setDue(e.target.value)
    }
  }

  function deleteTask(index){
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  function handleEditChange(e, target) {
    if (target === "title") {
      setEditTitle(e.target.value);
    } else if (target === "notes") {
      setEditNotes(e.target.value);
    } else {
      setEditDue(e.target.value);
    }
  }

  function editTask(index) {
    setEditingIndex(index); // Set the index of the task being edited
    setEditTitle(tasks[index][0]); // Pre-fill fields with existing task data
    setEditNotes(tasks[index][1]);
    setEditDue(tasks[index][2]);
  }

  function saveTask() {
    const newTasks = [...tasks];
    newTasks[editingIndex] = { title: editTitle, notes: editNotes, due: editDue }; // Update the task at the editing index
    setTasks(newTasks);
    setEditingIndex(null); // Reset the editing state
    setEditTitle(''); // Clear input fields
    setEditNotes('');
    setEditDue('');
  }

  function addTask() {
    setTasks([...tasks, [title, notes, due]])
    setTitle('')
    setNotes('')
    setDue('')
    setAddBox(false)
  }

  function saveTask() {
    const newTasks = [...tasks];
    console.log(editTitle + " " + editNotes + " " + editDue)
    newTasks[editingIndex] = [ editTitle, editNotes, editDue ]; // Update the task at the editing index
    setTasks(newTasks);
    console.log(tasks)
    setEditingIndex(-1); // Reset the editing state
    setEditTitle(''); // Clear input fields
    setEditNotes('');
    setEditDue('');
  }

  function openAddTask() {
    setAddBox(!addBox)
    setTitle('')
    setNotes('')
    setDue('')
  }

  return (
    <div className="list-app">
      <p>Todo List</p>
        {addBox && (<div>
        <div>
          <input type="text" value={title} onChange={(e) => handleChange(e, "title")} placeholder="Task Title" />
        </div>
        <div>
          <input type="text" value={notes} onChange={(e) => handleChange(e, "notes")} placeholder="Task Notes" />
        </div>
        <div>
          <input type="text" value={due} onChange={(e) => handleChange(e, "due")} placeholder="Task Due Date" />
        </div>
        <div>
          <button onClick={()=>addTask()}>Add Task</button>
          <button onClick={()=>openAddTask()}>Cancel</button>
        </div></div>)}
        {!addBox && (<button onClick={()=>openAddTask()}>Add Task</button>)}
        
      {tasks.map((task, index) => (
        <div key={index} className="todo-item">
          {editingIndex === index ? (
            // Show Edit Form in place of the task being edited
            <div className="edit-task">
              <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => handleEditChange(e, "title")}
                placeholder="Edit Task Title"
              />
              </div>
              <div>
              <input
                type="text"
                value={editNotes}
                onChange={(e) => handleEditChange(e, "notes")}
                placeholder="Edit Task Notes"
              />
              </div>
              <div>
              <input
                type="text"
                value={editDue}
                onChange={(e) => handleEditChange(e, "due")}
                placeholder="Edit Task Due Date"
              />
              </div>
              <button className="left-btn" onClick={saveTask}>Save</button>
              <button onClick={() => setEditingIndex(-1)}>Cancel</button>
            </div>
          ) : (
            // Show task if not editing
            <div>
              <p className="task-line">Task: {task[0]}</p>
              <p className="task-line">Notes: {task[1]}</p>
              <p className="task-line">Due: {task[2]}</p>
              <button className="left-btn" onClick={() => deleteTask(index)}>Remove</button>
              <button onClick={() => editTask(index)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
