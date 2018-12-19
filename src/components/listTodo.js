import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Aux from '../hoc/aux'
import Todo from './todo'

const ListTodo = (props) => {
  return (
    <Aux>
      <h1>Todo List<span>Get things done, one item at a time.</span></h1>
      <ul>
        { props.todos.map(todo => (
          <Todo
            key={ todo.id } content={ todo.content }
            done={ todo.done } remove= { () => {props.removeTodo(todo.id)}}
            updateStatus={ ()=> {props.updateStatus(todo.id)}
          }
          />
        ))}
      </ul>
      { props.todos.length <= 0 ? <p show="false" >Your todo list is empty.</p> : null }
    </Aux>
  )
};

const mapStateToProps = state => {
  return {
      todos: state.todos,
      sortItem: state.sortItem
  };
};

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  payload: {id: id}
});

export const updateStatus = (id) => ({
  type: actionTypes.UPDATE_STATUS,
  payload: {id: id}
});

export default connect(mapStateToProps, {removeTodo, updateStatus})(ListTodo);;
