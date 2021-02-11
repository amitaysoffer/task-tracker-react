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

  const addTask = (text, day, reminder, id) => {
    setTasks(prevTasks => [...prevTasks, { text, day, reminder, id }]);
  };

  const deleteTask = id => {
    console.log(id);
    const newTasks = tasks.filter(task => `task-${task.id}` !== id);
    setTasks(newTasks);
  };

  const toggleReminder = id => {
    const updatedTask = tasks.map(task =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(updatedTask);
  };

  return (
    <div className="App">
      <Header isShowForm={isShowForm} onShow={() => setShowForm(!isShowForm)} />
      {isShowForm && <AddTask addTask={addTask} />}
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
