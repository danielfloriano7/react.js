import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDel}) => {
    

    return (
        <>
        {tasks.map(task => (
        <Task 
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick} 
            handleTaskDel={handleTaskDel}/>
        ))}
        </>
    );
    
};

export default Tasks;