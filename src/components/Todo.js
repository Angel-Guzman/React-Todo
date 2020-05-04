import React from 'react';

const Todo = props => {
    return (
    <div onClick={e => {props.toggleComplete(e.target.id)}}>
            <p id={props.item.id} className={`item${props.item.completed ? ' completed ' : ''}`}>{props.item.task}</p>
        </div>
    )
}

export default Todo;