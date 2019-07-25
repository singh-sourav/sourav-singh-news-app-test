
const initialState = {
    data: [],
  };
  
  export const news = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_NEWS_SUCCESS": {
        return {
          ...state,
          data: [...action.payload]
        };
      }
  
      default:
        return state;
    }
  };