# Code Snippets

## Basic Task UI
```html

import './App.css';

import React from 'react'
import { useState } from 'react'

function TodoList () {

  return (
    <div>
      <p>Todo List</p>
      <div>
        <p>Task: task name here</p>
        <p>Notes: task notes here</p>
        <p>Due: due date here</p>
        <button>Remove</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
export default TodoList;
```

## Task Storage
```html
var tasks = [["task 1 title", "task 1 notes", "task 1 due date"],
    ["task 2 title", "task 2 notes", "task 2 due date"],
    ["task 3 title", "task 3 notes", "task 3 due date"]]
```

## Task Rendering
```html
{tasks.map((task, index) => (
      <div key={index}>
        <div>
          <p>Task: {task[0]}</p>
          <p>Notes: {task[1]}</p>
          <p>Due: {task[2]}</p>
          <button>Remove</button>
          <button>Edit</button>
        </div>
      </div>
))}
```

## UI Challenge
How can we make this look better?
```html
CSS styling: add margins, color scheme, fonts, etc.
```

```html
<div key={index} className="todo-item">

...

.todo-item {
  color: black;
  background-color: white;
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
  width: 400px;
  text-align: left;
  font-size: 20px;
}
```

## Delete Task
```html
function deleteTask(index){
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    tasks = newTasks
}

...

<button onClick={() => deleteTask(index)}>Remove</button>
```

## Dynamic Rendering with State
```html
const [tasks, setTasks] = useState([
    ["task 1 title", "task 1 notes", "task 1 due date"],
    ["task 2 title", "task 2 notes", "task 2 due date"],
    ["task 3 title", "task 3 notes", "task 3 due date"]
  ]);

...

setTasks(newTasks)
```

## Add Task
```html
function addTask() {
    setTasks([...tasks, ["new task title", "notes", "due"]])
}

<div>
  <div>
    <input type="text" placeholder="Task Title" />
  </div>
  <div>
    <input type="text" placeholder="Task Notes" />
  </div>
  <div>
    <input type="text" placeholder="Task Due Date" />
  </div>
  <div>
    <button onClick={()=>addTask()}>Add Task</button>
  </div>
</div>
```

## Dynamic Task Adding
```html
const [title, setTitle] = useState('')
const [notes, setNotes] = useState('')
const [due, setDue] = useState('')

...

function handleChange(e, target){
  if (target == "title") {
    setTitle(e.target.value)
  } else if (target == "notes") {
    setNotes(e.target.value)
  } else {
    setDue(e.target.value)
  }
}

...

<div>
  <input type="text" value={title} onChange={(e) => handleChange(e, "title")} placeholder="Task Title" />
</div>
<div>
  <input type="text" value={notes} onChange={(e) => handleChange(e, "notes")} placeholder="Task Notes" />
</div>
<div>
  <input type="text" value={due} onChange={(e) => handleChange(e, "due")} placeholder="Task Due Date" />
</div>
```

## Feature brainstorming
```html
Add edit functionality
Reordering functionality
```

