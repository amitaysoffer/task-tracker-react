import React, { useState } from 'react';
import './css/App.css';
import './css/style.css';
import data from './data';
import Header from './components/Header';
import AddTask from './components/AddTask';
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
      <Header toggleForm={toggleForm} isShowForm={isShowForm} />
      {isShowForm && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
