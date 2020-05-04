import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            keyword: ''
        }
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value},
        () => console.log(this.state.keyword))
    };

    submitForm = e => {
        e.preventDefault();
        this.props.addTask(this.state.keyword);
        this.setState({keyword: ''});
    };

    render(){
    return (
        <form onSubmit={this.submitForm}>
            <input 
            onChange={this.handleChanges}
            value={this.state.keyword}
            type='text' 
            name="keyword"
            />
            <button type='submit'>Add Task</button>
        </form>
        )
    }
}

export default TodoForm;