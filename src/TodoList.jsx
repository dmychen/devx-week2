import { useState } from 'react'
import AddTodo from './AddTodo';

function TodoList () {
    // dummy tasks we start with
    const [tasks, setTasks] = useState([
        ["task 1 title", "task 1 notes", "task 1 due date"],
        ["task 2 title", "task 2 notes", "task 2 due date"],
        ["task 3 title", "task 3 notes", "task 3 due date"]
    ]);

    //  const [addBox, setAddBox] = useState(false)
    // const [editTitle, setEditTitle] = useState('');
    // const [editNotes, setEditNotes] = useState('');
    // const [editDue, setEditDue] = useState('');
    // const [editingIndex, setEditingIndex] = useState(null); // New state to track editing task index

    

    // removes a task from our list
    function deleteTask (index) {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    function editTask (index) {
        console.log(`This should edit the task at index ${index}!`);
    }

    function addTask ({ title, notes, due }) {
        setTasks([...tasks, [title, notes, due]])
    }


    // function handleEditChange(e, target) {
    //   if (target === "title") {
    //     setEditTitle(e.target.value);
    //   } else if (target === "notes") {
    //     setEditNotes(e.target.value);
    //   } else {
    //     setEditDue(e.target.value);
    //   }
    // }

    // function editTask(index) {
    //   setEditingIndex(index); // Set the index of the task being edited
    //   setEditTitle(tasks[index][0]); // Pre-fill fields with existing task data
    //   setEditNotes(tasks[index][1]);
    //   setEditDue(tasks[index][2]);
    // }

    // function saveTask() {
    //   const newTasks = [...tasks];
    //   newTasks[editingIndex] = { title: editTitle, notes: editNotes, due: editDue }; // Update the task at the editing index
    //   setTasks(newTasks);
    //   setEditingIndex(null); // Reset the editing state
    //   setEditTitle(''); // Clear input fields
    //   setEditNotes('');
    //   setEditDue('');
    // }

    

    // function saveTask() {
    //   const newTasks = [...tasks];
    //   console.log(editTitle + " " + editNotes + " " + editDue)
    //   newTasks[editingIndex] = [ editTitle, editNotes, editDue ]; // Update the task at the editing index
    //   setTasks(newTasks);
    //   console.log(tasks)
    //   setEditingIndex(-1); // Reset the editing state
    //   setEditTitle(''); // Clear input fields
    //   setEditNotes('');
    //   setEditDue('');
    // }

    // function openAddTask() {
    //   setAddBox(!addBox)
    //   setTitle('')
    //   setNotes('')
    //   setDue('')
    // }

    return (
        <div className="todo-list">
            <AddTodo addTask={addTask} />
            
            {tasks.map((task, index) => (
                <TodoItem 
                    key={index}
                    task={task} 
                    index={index} 
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </div>
    );
}

export default TodoList;

/* HTML for editing tasks
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
*/