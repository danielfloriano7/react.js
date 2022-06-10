import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from "react-router-dom";

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskDel}) => {
    return ( 
        <div
         className="task-container" 
         style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
         >

            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-cotainer">
                <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDel(task.id)}
                > 
                    <CgClose />
                </button>

                <button 
                    className="see-task-details-button" 
                    onClick={() => handleTaskDel(task.id)}
                > 
                    <CgInfo />
                </button>
            </div>
        </div>
    );
};
 
export default Task;