import Task from './Task';

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          text={task.text}
          day={task.day}
          id={task.id}
          key={task.id}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
