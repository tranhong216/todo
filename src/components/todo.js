import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import {faSquare} from '@fortawesome/fontawesome-free-regular'
import './todo.scss'
import Aux from '../hoc/aux'

const Todo = (props) => {
  return (
    <Aux>
      <li className={ props.done ? 'done' : '' }>
        <span className="label">{ props.content }</span>
        <div className="actions">
          <button className="btn-picto" onClick={ props.updateStatus }>
            { props.done ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} />}
          </button>
          <button className="btn-picto">
            <FontAwesomeIcon icon={faTrash} onClick={ props.remove }/>
          </button>
        </div>
      </li>
    </Aux>
  )
};

export default Todo;
