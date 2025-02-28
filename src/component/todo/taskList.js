import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const startEditing = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const onSave = (task) => {
    onChangeTask({ ...task, text: editText });
    setEditId(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
          />
          {editId === task.id ? (
            <>
              <input type="text" value={editText} onChange={handleEditChange} />
              <button onClick={() => onSave(task)}>Save</button>
            </>
          ) : (
            <span>{task.text}</span>
          )}
          {editId === task.id ? (
            <button onClick={() => setEditId(null)}>Cancel</button>
          ) : (
            <button onClick={() => startEditing(task)}>Edit</button>
          )}
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
