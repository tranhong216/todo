import React, { Component } from 'react';
import NewForm from '../../components/new_form'
import './main_todo.scss'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import ListTodo from '../../components/listTodo'
import classNames from 'classnames/bind';
import Todo from '../../components/todo'
class MainTodo extends Component {
  render(){
    const styleToggle = classNames('togglebutton-wrapper', { 'togglebutton-checked' : this.props.sortItem})
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
        <ListTodo renderItem = {todos} emptyItem={this.props.todos.length <= 0 ? <p show="false" >Your todo list is empty.</p> : null }/>
        <div className={styleToggle}>
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

const mapStateToProps = state => ({
  todos: state.todos,
  sortItem: state.sortItem
});

export const addTodo = (content) => ({
  type: actionTypes.ADD_TODO,
  payload: {content: content}
});

export const toggleSort = () => ({
  type: actionTypes.TOGGLE_SORT
});

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  payload: {id: id}
});

export const updateStatus = (id) => ({
  type: actionTypes.UPDATE_STATUS,
  payload: {id: id}
});

export default connect(mapStateToProps, { addTodo, toggleSort, updateStatus, removeTodo})(MainTodo);
