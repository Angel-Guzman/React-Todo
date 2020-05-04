import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <button type='submit'>Clear</button>
        </div>
    )
}

export default TodoList;