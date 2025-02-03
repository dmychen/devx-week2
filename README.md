# Workshop 2 (Week 5)

## Getting Started

This repo contains the completed code for this week's workshop, along with instructions and other resources for you to learn more.

We assume you have completed the code from workshop 1. We will be changing the React we coded last week, but any CSS or other code you added shouldn't be affected. You can clone the week 1 repository if you want a clean slate.

```bash
git clone https://github.com/cruizeship/devx-week1.git
npm install
```

## Resources

- [Today's Slides]{https://docs.google.com/presentation/d/130kXaKQ8cPWd08f40DfUmku2unK2BPywi5HaQCvA6m4/edit?usp=sharing}
- [Workshop 1 Github]{https://github.com/cruizeship/devx-week1}
- [All Workshops]{https://github.com/cruizeship/devx-developer-internship}

**Other Reading**
- This is an overview on web development that I wrote up: [Week 2 Writeup]{https://docs.google.com/document/d/1GTdLg4tJJNAXYh2GVa8MVd_6595bGGll288u1SbztYk/edit?tab=t.0}
- This is from the React docs, talking about how we can approach building components with React: [Thinking in React]{https://react.dev/learn/thinking-in-react}
- This is a useful article on principles we should follow when writing React: [S.O.L.I.D Principle in React]{https://medium.com/@debashishrambhola/wrong-s-o-l-i-d-principle-in-react-js-applications-a-guide-with-some-simple-examples-406fbd1ec982}

### Today's Plan

1. Isolating Components

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

function addTask() {
  setTasks([...tasks, [title, notes, due]])
  setTitle('')
  setNotes('')
  setDue('')
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

