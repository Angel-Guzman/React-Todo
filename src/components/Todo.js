import React from 'react';

const Todo = props => {
    return (
        <div className='item'>
            <p id={props.item.id} onClick={e => {props.toggleComplete(e.target.id)}}>{props.item.task}</p>
        </div>
    )
}

export default Todo;