
export interface Post {
    first_name: string,
    last_name: string,
    title: string,
    body: string,
    avatar: string,
    id: number
  }
  
  export interface StateType {
    posts: Post[];
  }
  
  export interface FetchPostAction {
    type: 'FETCH_POSTS';
    payload: Post[];
  }

  export interface DeletePostAction {
    type: 'DELETE_POST';
    payload: number;
  }

  export interface RootState {
    posts: Post[];
  }

  export  type Actions = FetchPostAction | DeletePostAction;
 