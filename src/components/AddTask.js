import { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [isReminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (text === '' || day === '') {
      alert('Need to fill all fields');
    } else {
      const id = Math.floor(Math.random() * 100 + 1);
      addTask(text, day, isReminder, id);
    }

    setText('');
    setDay('');
    setReminder(false);
  };

  const handleReminder = () => {
    console.log(isReminder);
    setReminder(!isReminder);
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
        <input
          style={{ width: 'auto' }}
          type="checkbox"
          checked={isReminder}
          value={isReminder}
          onChange={handleReminder}
        />
      </div>
      <input
        style={{ background: 'black', color: '#fff' }}
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
