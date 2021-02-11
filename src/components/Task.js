import { FiDelete } from 'react-icons/fi';

const Task = ({ text, day, reminder, id, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${reminder ? 'reminder' : ''}`}
      id={`task-${id}`}
      onDoubleClick={() => toggleReminder(id)}
    >
      <p>{text}</p>
      <p>{day}</p>
      <button onClick={e => deleteTask(`task-${id}`)} className="delete">
        <FiDelete />
      </button>
    </div>
  );
};

export default Task;
