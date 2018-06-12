import types from './actionTypes';

export const addTodo = text => ({
  type: types.ADD_TODO,
  text,
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});

export const delTodo = (id, text) => ({
  type: types.DEL_TODO,
  id,
});

export const markTodo = id => ({
  type: types.MARK_TODO,
  id,
});

export const markAll = id => ({
  type: types.MARK_ALL,
});

export const delMarked = id => ({
  type: types.DEL_MARKED,
});