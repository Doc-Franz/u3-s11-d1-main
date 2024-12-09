const initialState = {
  main: {
    agencies: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGENCIES_LIST":
      return {
        ...state,
        main: {
          ...state.main,
          agencies: [...state.main.agencies, action.payload]
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
