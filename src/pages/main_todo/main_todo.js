import React, { Component } from 'react';
import Todo from '../../components/todo'
import NewForm from '../../components/new_form'
import './main_todo.scss'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class MainTodo extends Component {
  render(){
    console.log(this.props.todos)
    const todos = (
      this.props.todos.map(todo => (
        <Todo
          key={ todo.id } content={ todo.content }
          done={ todo.done } remove= { () => {this.props.removeTodo(todo.id)}}
          updateStatus={ ()=> {this.props.updateStatus(todo.id)}
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
        { this.props.todos.length <= 0 ? <p show="false" >Your todo list is empty.</p> : null }
        <div className={"togglebutton-wrapper " + (this.props.inactive ? 'togglebutton-checked' : '')}>
          <label >
            <span className="togglebutton-label">Move done items at the end?</span>
            <span className="tooglebutton-box"></span>
            <input type="checkbox" onChange={ this.props.toggleSort }/>
          </label>
        </div>
        <NewForm add={this.props.addTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      todos: state.todos,
      inactive: false
  };
};

const mapDispatchToProps = dispatch => {
  return {
      addTodo: (content) => dispatch({type: actionTypes.ADD_TODO, todoData: {content: content}}),
      removeTodo: (id) => dispatch({type: actionTypes.REMOVE_TODO, payload: {id: id}}),
      updateStatus: (id) => dispatch({type: actionTypes.UPDATE_STATUS, payload: {id: id}}),
      toggleSort: () => dispatch({type: actionTypes.TOGGLE_SORT})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainTodo);
