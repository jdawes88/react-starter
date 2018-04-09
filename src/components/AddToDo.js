import React from 'react';

class AddToDo extends React.Component {
    state = {
        newTodo: '',
        priority:'',
    }

    render () {
        return <div>
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.newTodo}/>
            <button onClick ={this.handleClick}>GO!!!</button>
            <label>Priority</label>
            <select value={this.state.priority} onChange={this.priorityChange}>
            <option value="1"></option>
            <option value="4">urgent</option>
            <option value="3">high</option>
            <option value="2">medium</option>
            <option value="1">low</option>
            </select>
            </div>
    }
    
    //user types in input field- 
    //triggers on change event listener- 
    //calls handleChange event handler- 
    //sets state with new input text
    //calls render again
    //value in input field set to new state

    priorityChange = (event) => {
        const selectedPriority = event.target.value;
        
        this.setState({
            priority:selectedPriority,
        })
    }

    handleChange = (event) => {
        const inputText = event.target.value;
        this.setState({
            newTodo: inputText
        });
    };
    
    handleKeyUp = (event) => {
        const {newTodo} = this.state
        if (event.keyCode === 13 && newTodo) this.props.addToDo(newTodo);
    }
    handleClick = () => {
        const {newTodo, priority} = this.state
        if (newTodo) this.props.addToDo(newTodo, priority);
        this.setState({
            newTodo:'',
            priority: ''
        })
    }
}


export default AddToDo 