import React from 'react';

const Form = () => {
  return (
    <form>
      <div>
        <label>Task</label>
        <div>Amitay Soffer</div>
        <input type="text" placeholder="Add Task" />
      </div>
      <div>
        <label>Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div>
        <label>Set Reminder</label>
        <input style={{ width: 'auto' }} type="checkbox" />
      </div>
      <input type="button" value="submit" />
    </form>
  );
};

export default Form;
