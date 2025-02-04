function TodoItem ( task, index, deleteTask, editTask ) {
    return (
        <div className="todo-item">
            <p className="task-line">Task: {task[0]}</p>
            <p className="task-line">Notes: {task[1]}</p>
            <p className="task-line">Due: {task[2]}</p>
            <button className="left-btn" onClick={() => deleteTask(index)}>Remove</button>
            <button onClick={() => editTask(index)}>Edit</button>
        </div>
    );
}

export default TodoItem;