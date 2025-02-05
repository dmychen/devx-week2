import { useState } from "react";

function EditTodo ({ index, editTask, setEditingIndex }) {
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [due, setDue] = useState('');

    // updates title, notes, and due-date variables on user input
    function handleChange (e, target) {
        if (target == "title") {
            setTitle(e.target.value);
        } else if (target == "notes") {
            setNotes(e.target.value);
        } else {
            setDue(e.target.value);
        }
    }

    function handleSave () {
        editTask(index, title, notes, due);
        setEditingIndex(-1);
    }

    return (
        <div className="edit-task">
            <input type="text" value={title} onChange={(e) => handleChange(e, "title")} placeholder="Task Title" />
            <input type="text" value={notes} onChange={(e) => handleChange(e, "notes")} placeholder="Task Notes" />
            <input type="text" value={due} onChange={(e) => handleChange(e, "due")} placeholder="Task Due Date" />
            <button onClick={handleSave} >Save</button>
            <button onClick={() => setEditingIndex(-1)} >Cancel</button>
        </div>
      );
}

export default EditTodo;