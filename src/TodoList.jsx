import { useState } from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

function TodoList () {
    // dummy tasks we start with
    const [tasks, setTasks] = useState([
        ["task 1 title", "task 1 notes", "task 1 due date"],
        ["task 2 title", "task 2 notes", "task 2 due date"],
        ["task 3 title", "task 3 notes", "task 3 due date"]
    ]);
    const [showAddTodo, setShowAddTodo] = useState(false); // toggle AddTodo box
    const [editingIndex, setEditingIndex] = useState(-1); // index of currently editing task
    
    function addTask ({ title, notes, due }) {
        setTasks([...tasks, [title, notes, due]])
    }

    function deleteTask (index) {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }
    
    function editTask (index, newTitle, newNotes, newDue) {
        const newTasks = [...tasks];
        newTasks[index] = [ newTitle, newNotes, newDue ]; // Update the task at the editing index
        setTasks(newTasks);
    }

    return (
        <div className="todo-list">
            <button onClick={() => setShowAddTodo(!showAddTodo)}>Create New Todo</button>
            {showAddTodo ? (<AddTodo addTask={addTask} />) : null }
            
            {tasks.map((task, index) => (
                editingIndex == index ? (
                    <EditTodo 
                        key={index} 
                        index={index}
                        editTask={editTask}
                        setEditingIndex={setEditingIndex}
                    />
                ) : (
                    <TodoItem 
                        key={index}
                        index={index} 
                        task={task} 
                        deleteTask={deleteTask}
                        setEditingIndex={setEditingIndex}
                    />
                )
            ))}
        </div>
    );
}

export default TodoList;