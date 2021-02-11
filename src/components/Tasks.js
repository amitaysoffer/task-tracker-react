import Task from './Task';

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          text={task.text}
          day={task.day}
          id={task.id}
          reminder={task.reminder}
          toggleReminder={toggleReminder}
          key={task.id}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
