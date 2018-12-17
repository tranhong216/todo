import React from 'react';

const NewForm = (props) => {
  const inputTodo = React.createRef();

  const addTodo = (event) => {
    event.preventDefault();
    props.add(inputTodo.current.value)
    inputTodo.current.value = null;
  }

  return (
    <form onSubmit={ addTodo }>
      <label>Add to the todo list</label>
      <input type="text" ref={ inputTodo }/>
      <button type="submit" >Add item</button>
    </form>
  )
};

export default NewForm;
