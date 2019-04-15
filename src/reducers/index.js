import { store } from "../store/store";

const todos = (state = {
  data: [],loading:true,
}, action) => {
  const { data } = state;
  switch (action.type) {
    case 'ADD_TODO':
      state={
        ...state,
        loading:true
      }
      data.push({
        id: action.id,
        data: action.data,
      });
      return {
        ...state,
        loading:false,
        data
      };
    
    case 'DELETE_TODO':
      let values = data.filter(todo => todo.id !== action.id);

      return {
        ...state,
        data: values
      }
    default:
      return state;
  }
};


export default todos;
