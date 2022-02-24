const initialState = {
  list: [],
  data: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, list: [...state.list, action.payLoad] };

    case "DELETE_TODO":
      const newList = state.list.filter(
        (item) => item.id !== action.payLoad.id
      );
      return {
        ...state,
        list: newList,
      };
    case "EDIT_TODO":
      const editList = state.list.filter(
        (item) => item.id !== action.payLoad.id
      );

      return {
        ...state,
        list: editList,
        data: [action.payLoad.data],
      };
    default:
      return state;
  }
};

export default todoReducer;
