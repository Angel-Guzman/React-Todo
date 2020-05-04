import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div >
            {props.tasks.map(item => (
                <Todo toggleComplete={props.toggleComplete} key={item.id} item={item} />
            ))}
            <button type='submit'>Clear Completed</button>
        </div>
    )
}

export default TodoList;