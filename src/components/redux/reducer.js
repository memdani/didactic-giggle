// const initialState = {
//     parentCounter: 0,
//     childCounter: 0,
// };

const initialState = {
  formValues: 0,
  message: "",
  parentCounter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FORMVALUES":
      console.log("reducer for form change called");
      return {
        ...state,
        formValues: action.payload,
      };
    case "INCREMENT_PARENT":
      return (
        console.log("increment_parent called"),
        { ...state, parentCounter: state.parentCounter + 1 }
      );
    default:
      console.log("default called");
      return state;
  }
}

export default reducer;
