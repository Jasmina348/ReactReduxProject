import { postsConstants } from './constants';
import { postsServices } from './services';

const {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE
} = postsConstants;


export const fetchPosts = () => {
    function request() {
        return {
            type: FETCH_POSTS_REQUEST
        }
    }
    function success(payLoad) {
        return {
            type: FETCH_POSTS_SUCCESS,
            payload: payLoad
        }
    }
    function failure() {
        return {
            type: FETCH_POSTS_FAILURE
        }
    }

    return dispatch => {
        dispatch(request());
       
        postsServices.fetchPosts().then(
            resp => {
                console.log("fetching",resp);
                if (resp.length > 0) {
                    dispatch(success(resp));
                }
                else {
                    dispatch(failure());
                }
            }
        )
    }
};
export const addPost = (postData) => {
    function request() {
        return {
            type: ADD_POST_REQUEST,
        }
    }
    function success(payLoad) {
        return {
            type: ADD_POST_SUCCESS,
        }
    }
    function failure() {
        return {
            type: ADD_POST_FAILURE
        }
    }

    return dispatch => {
        dispatch(request);

        postsServices.addPost(postData).then(
            resp => {
                if (resp) {
                    dispatch(success());
                }
                else {
                    dispatch(failure());
                }
            }
        )
    }
};


export const postsActions = { fetchPosts, addPost };