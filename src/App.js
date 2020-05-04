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

  addTask = e => {
    const newTask = {
      task: e,
      id: Date.now(),
      completed: false,
    }
    this.setState({ 
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleComplete = selectedTask => {
    // when I click
    let updatedTask, updatedTaskIndex
    // get the task I need
    // filter each task 
    this.state.tasks.filter((e, index) => { 
      if(selectedTask == e.id){
        updatedTask = e
        updatedTaskIndex = index
      }
    })
    updatedTask.completed = !updatedTask.completed
    const newState = [...this.state.tasks]
    newState[updatedTaskIndex] = updatedTask
    this.setState({
      tasks: newState
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addTask={this.addTask} 
        />
        <TodoList 
        toggleComplete={this.toggleComplete} 
        tasks={this.state.tasks} 
        />
      </div>
    );
  }
}

export default App;
