import React from 'react';
import Heading from './Heading'
import AddToDo from './AddToDo'

class App extends React.Component {
  state = {
    todos: [  {
      text:"Water plants",
      completed: false,
      priority: '1'
    },
    {
      text:"Go to gym",
      completed: false,
      priority: '2'
    },
    {
      text: "Feed python",
      completed: false,
      priority: '4'
    },
    {
      text:"Learn Python",
      completed: false,
      priority: '3'
    }]
  }
  render () {
    const {todos} = this.state
    return (
      <div>
        <Heading name="Joe"/>
        <AddToDo addToDo = {this.addToDo}/>
        <Checklist 
          todos ={todos}
          removeTodo = {this.removeTodo}
          toggleTodo = {this.toggleTodo}/>
      </div>
    );
  }

  removeTodo = (taskToRemove) => {
    const newTodos = this.state.todos.filter(task => {
      return task !== taskToRemove;
    });
    this.setState({
      todos : newTodos
    });
  }

  toggleTodo = (taskToToggle) => {
    const strikeThroughToDos = this.state.todos.map(task => {
      if(task === taskToToggle){
        const newTodo = {...task, completed:!task.completed} // <-- same --> const newTodo = Object.assign({}, todo, { //   completed: !task.completed}) 
        return newTodo
      }
      return task
    })
    this.setState({
      todos: strikeThroughToDos
    })
  }

  addToDo = (todoToAdd, priorityToAdd) => {
    const newTodo ={
      text: todoToAdd,
      completed: false,
      priority: priorityToAdd,
    }
    this.setState({
      todos: [...this.state.todos, newTodo].sort((a, b) => {
        return b.priority -a.priority
      })
    })
  }
}

function Checklist ({todos, removeTodo, toggleTodo}) {
  return <ul>
    {todos.map((task, i) => {
      return <Task 
        task={task}
        key={`${i}${task}`}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    })}
    </ul>
}

function Task ({task, toggleTodo, removeTodo}) {
    const lineThrough = {
      textDecoration: 'line-through' 
    }
    
    return !task.completed ? <li onDoubleClick = {() => removeTodo(task)} onClick={() => toggleTodo(task)} >{task.text}</li> :<li style={lineThrough} onDoubleClick = {() => removeTodo(task)} onClick={() => toggleTodo(task)} >{task.text}</li>;
}



export default App;

