import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div >
            <button onClick={props.clearCompleted} type='submit'>Clear Completed</button>
            {props.tasks.map(item => (
                <Todo toggleComplete={props.toggleComplete} key={item.id} item={item} />
            ))}
        </div>
    )
}

export default TodoList;