import React from 'react';
import Aux from '../hoc/aux'


const ListTodo = (props) => {
  return (
    <Aux>
      <h1>Todo List<span>Get things done, one item at a time.</span></h1>
      <ul>
        { props.renderItem}
      </ul>
      { props.emptyItem}
    </Aux>
  )
};

export default ListTodo;
