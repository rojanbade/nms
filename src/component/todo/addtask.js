import React from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    onAddTask(text);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
