import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";


const App = () => {
  // let msg = 'Hello!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
    {
      id: '3',
      title: 'Ver filmes',
      completed: true,
    },
    
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle, 
      id: uuidv4(),
      completed: false,

    }]

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAdd={handleTaskAdd}/> 
       
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;