import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDeltails";

import "./App.css";


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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle, 
      id: uuidv4(),
      completed: false,

    }]

    setTasks(newTasks);
  };

  const handleTaskDel = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => {
         return (
          <>
            <AddTask handleTaskAdd={handleTaskAdd} handleTaskClick={handleTaskClick} /> 
       
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDel={handleTaskDel}/>
          </>
        )}}/>
        <Route path="/:taskTitle" exact  component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;