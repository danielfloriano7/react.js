import React, { useEffect, useState } from "react";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } =  await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')

      setTasks(data)
    };
    
    fetchTasks();    
  }, []);

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
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
         
          <>
            <AddTask handleTaskAdd={handleTaskAdd} handleTaskClick={handleTaskClick} /> 
       
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDel={handleTaskDel}/>
          </>
        )}/>
        <Route path="/:taskTitle"   component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;