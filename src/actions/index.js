let nextTodoId = 0;
export const addTodo = data => ({
  type: 'ADD_TODO',
  id: nextTodoId += 1,
  data,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
})