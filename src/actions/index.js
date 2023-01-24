export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payLoad: {
      id: new Date().getTime(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payLoad: {
      id: id,
    },
  };
};

export const editTodo = (list) => {
  return {
    type: "EDIT_TODO",
    payLoad: {
      id: list.id,
      data: list.data,
    },
  };
};
