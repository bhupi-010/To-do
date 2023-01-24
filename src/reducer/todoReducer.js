const initialState = {
  list: [],
  data: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const check = state.list.find((tod) => tod.data === action.payLoad.data);
      if (check) {
        alert("Task already exists");
      } else {
        state = { ...state, list: [...state.list, action.payLoad] };
      }

      return state;

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
