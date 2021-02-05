import React, { useState } from 'react';

const Form = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100 + 1);
    addTask(text, day, id);

    setText('');
    setDay('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          onChange={e => setText(e.target.value)}
          value={text}
          placeholder="Add Task"
        />
      </div>
      <div>
        <label>Task</label>
        <input
          type="text"
          onChange={e => setDay(e.target.value)}
          value={day}
          placeholder="Add Day and time"
        />
      </div>
      <div>
        <label>Set Reminder</label>
        <input style={{ width: 'auto' }} type="checkbox" />
      </div>
      <input
        style={{ background: 'black', color: '#fff' }}
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default Form;
