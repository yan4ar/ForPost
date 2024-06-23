 import { StateType, Actions } from "./interface";
import { Reducer } from "redux";
import { RootState } from "./interface";
 const initialState: StateType = {
     posts: [],
   };

  // export function reducer(state = initialState, action: Actions): StateType {
  //  switch (action.type) {
  //    case 'FETCH_POSTS':
  //      return {
  //        ...state,
  //        posts: action.payload,
  //      };
  //   //  case 'DELETE_POST':
  //     //  return {
  //       //  ...state,
  //       //  posts: state.posts.filter((post) => post.id !== action.payload),
  //     //  };
  //    default:
  //      return state;
  //  }
  //  }

  export const rootReducer: Reducer<RootState, Actions> = (
    state = initialState,
    action: Actions
  ) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return {
          ...state,
          posts: action.payload,
        };
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state;
    }
  };
