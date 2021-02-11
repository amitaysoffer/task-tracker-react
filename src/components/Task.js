const Task = ({ text, day, id, deleteTask }) => {
  const handleClick = e => {
    deleteTask(e.target.parentElement.id);
  };

  return (
    <div className="task" id={`task-${id}`}>
      <p>{text}</p>
      <p>{day}</p>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
};

export default Task;
