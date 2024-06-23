import axios from 'axios';
import { Dispatch } from 'redux';
import { FetchPostAction, DeletePostAction } from './interface';


export const fetchPosts =  async (dispatch: Dispatch<FetchPostAction>) => {
  try {
    const response = await axios.get('http://localhost:3000/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const deletePost = (id: number): DeletePostAction => ({
  type: 'DELETE_POST',
  payload: id,
});