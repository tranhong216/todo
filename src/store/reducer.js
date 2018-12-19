import * as actionTypes from './actions';

const initialState = {
  todos: [],
  sortItem: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: Math.random(),
        content: action.payload.content,
        done: false
      }
      return {...state, todos: state.todos.concat(newTodo)}
    case actionTypes.REMOVE_TODO:
      return {...state,
        todos: state.todos.filter( ele => (ele.id !== action.payload.id))
      }

    case actionTypes.UPDATE_STATUS:
      const list = [...state.todos]
      const index = list.map(e => e.id).indexOf(action.payload.id);
      list[index].done = !list[index].done

      return {
        ...state,
        todos: list
      }
    case actionTypes.TOGGLE_SORT:
      const listTodo = [...state.todos];
      if(!state.sortItem) {
        let doneTodo = listTodo.filter( item => item.done )
        let notdone = listTodo.filter( item => !item.done )
        return {
          ...state,
          todos: [...notdone, ...doneTodo],
          sortItem: !state.sortItem,
        }
      } else {
        listTodo.sort((e1, e2) => e1.id - e2.id);
        return {
          ...state,
          todos: [...listTodo],
          sortItem: !state.sortItem
        }
      }
    default:
      return state;
  }
}

export default reducer;
