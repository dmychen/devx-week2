import { useState } from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList () {
    // dummy tasks we start with
    const [tasks, setTasks] = useState([
        ["task 1 title", "task 1 notes", "task 1 due date"],
        ["task 2 title", "task 2 notes", "task 2 due date"],
        ["task 3 title", "task 3 notes", "task 3 due date"]
    ]);
    // toggle AddTodo box
    const [showAddTodo, setShowAddTodo] = useState(false);

    function deleteTask (index) {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    function addTask ({ title, notes, due }) {
        setTasks([...tasks, [title, notes, due]])
    }

    return (
        <div className="todo-list">
            <button onClick={() => setShowAddTodo(!showAddTodo)}>Create New Todo</button>
            {showAddTodo ? (<AddTodo addTask={addTask} />) : null }
            
            {tasks.map((task, index) => (
                <TodoItem 
                    key={index}
                    task={task} 
                    index={index} 
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
}

export default TodoList;