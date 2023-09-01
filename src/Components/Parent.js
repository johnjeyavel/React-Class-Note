
import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editIndex: -1, // Keeps track of the edited todo index
      editedTodo: '' // Stores the content of the edited todo
    };
    
  }

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: ''
      });
    }
  };

  handleDelete = (index) => {
    const { todos  } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index)
    this.setState({ todos: updatedTodos })
  }

  editItem = (index) => {
    this.setState({
      editIndex: index,
      editedTodo: this.state.todos[index] // Set the initial edited content
    });
  }

  handleEditSave = (index) => {
    const { todos, editedTodo } = this.state;
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editedTodo : todo
    );
    this.setState({
      todos: updatedTodos,
      editIndex: -1,
      editedTodo: ''
    });
  };

  handleInputChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <h2 style={{color:'yellow', fontSize:100}}>Todo List</h2>

        <input
          type="text"
          value={newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
       
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {this.state.editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={this.state.editedTodo}
                    onChange={(e) => this.setState({ editedTodo: e.target.value })}
                  />
                  <button onClick={() => this.handleEditSave(index)}>Save</button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                  <button onClick={() => this.editItem(index)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Parent;
