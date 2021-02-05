import React, { useState } from 'react';
import './css/App.css';
import './css/style.css';
import data from './data';
import Header from './components/Header';
import Form from './components/Form';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(data);
  const [isShowForm, setShowForm] = useState(false);

  const addTask = (text, day, id) => {
    setTasks(prevTasks => [...prevTasks, { text, day, id }]);
  };

  const deleteTask = id => {
    const newTasks = tasks.filter(task => `task-${task.id}` !== id);
    setTasks(newTasks);
  };

  const toggleForm = () => {
    setShowForm(!isShowForm);
  };

  return (
    <div className="App">
      <Header toggleForm={toggleForm} />
      {isShowForm && <Form addTask={addTask} />}
      <div className="tasks">
        {tasks.map(task => (
          <Tasks
            text={task.text}
            day={task.day}
            id={task.id}
            key={task.id}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
