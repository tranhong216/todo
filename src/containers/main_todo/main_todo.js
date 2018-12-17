import React, { Component } from 'react';
import Todo from '../../components/todo'
import NewForm from '../../components/new_form'
import './main_todo.scss'

class MainTodo extends Component {
  state =  {
    todos: [
      { id: 1, content: "Learn JS", done: false }
    ],
    inactive: false
  }

  addTodo = (item) => {
    const listTodo = [...this.state.todos];
    listTodo.push({id: listTodo.length + 1, content: item, done: false });
    this.setState({todos: listTodo})
  }

  removeTodo = (item) => {
    const listTodo = [...this.state.todos];
    const newList = listTodo.filter( ele => (ele.id !== item))
    this.setState({todos: newList})
  }

  updateStatus = (id) => {
    const listTodo = [...this.state.todos];
    const index = listTodo.map(e => e.id).indexOf(id);
    listTodo[index].done = !listTodo[index].done
    this.setState({todos: listTodo})
  }

  toggleSort = () => {
    const listTodo = [...this.state.todos];
    if(!this.state.inactive) {
      let doneTodo = listTodo.filter( item => item.done )
      let notdone = listTodo.filter( item => !item.done )
      this.setState({
        inactive: !this.state.inactive,
        todos: [...notdone, ...doneTodo]
      })
    } else {
      listTodo.sort((e1, e2) => {
        if (e2.id < e1.id) {
          return 1;
        }
        if (e2.id > e1.id) {
          return -1;
        }

        return 0;
      });
      this.setState({
        inactive: !this.state.inactive,
        todos: [...listTodo]
      })
    }
  }

  render(){

    const todos = (
      this.state.todos.map(todo => (
        <Todo
          key={ todo.id } content={ todo.content }
          done={ todo.done } remove= { () => {this.removeTodo(todo.id)}}
          updateStatus={ ()=> {this.updateStatus(todo.id)}
        }
        />
      ))
    );

    return (
      <div className="main-todo">
        <h1>
          Todo List
          <span>Get things done, one item at a time.</span>
        </h1>
        <ul>
          { todos }
        </ul>
        { this.state.todos.length <= 0 ? <p show="false" >Your todo list is empty.</p> : null }
        <div className={"togglebutton-wrapper " + (this.state.inactive ? 'togglebutton-checked' : '')}>
          <label >
            <span className="togglebutton-label">Move done items at the end?</span>
            <span className="tooglebutton-box"></span>
            <input type="checkbox" onChange={ this.toggleSort }/>
          </label>
        </div>
        <NewForm add={this.addTodo}/>
      </div>
    );
  }
}

export default MainTodo;
