import * as actionTypes from './actions';

const initialState = {
  todos: [],
  inactive: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: Math.random(),
        content: action.todoData.content,
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
      if(!state.inactive) {
        let doneTodo = listTodo.filter( item => item.done )
        let notdone = listTodo.filter( item => !item.done )
        return {
          ...state,
          todos: [...notdone, ...doneTodo],
          inactive: !state.inactive,
        }
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
        return {
          ...state,
          todos: [...listTodo],
          inactive: !state.inactive
        }
      }
    default:
      return state;
  }
}

export default reducer;
