import React, { Component } from 'react';
import NewForm from '../../components/new_form'
import './main_todo.scss'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import ListTodo from '../../components/listTodo'
import classNames from 'classnames/bind';

class MainTodo extends Component {
  render(){
    const styleToggle = classNames('togglebutton-wrapper', { 'togglebutton-checked' : this.props.sortItem})

    return (
      <div className="main-todo">
        <ListTodo />
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

const mapStateToProps = state => {
  return {
      todos: state.todos,
      sortItem: state.sortItem
  };
};

export const addTodo = (content) => ({
  type: actionTypes.ADD_TODO,
  payload: {content: content}
});

export const toggleSort = () => ({
  type: actionTypes.TOGGLE_SORT
});

export default connect(mapStateToProps, { addTodo, toggleSort})(MainTodo);
