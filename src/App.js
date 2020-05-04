import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const tasks = [
  {
    task: 'Clean Room',
    id: '23458976',
    completed: false
  },
  {
    task: 'Workout',
    id: '98769234',
    completed: false
  },
  {
    task: 'Finish Assignment',
    id: '57896263',
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
    }
    this.setState({ 
      tasks: [...this.state.tasks, newTask]
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
