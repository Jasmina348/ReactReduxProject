import { postsConstants } from './constants';


const {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE
} = postsConstants;


const initialState = {
    items: [],
    item: {},
    listLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            console.log("reducer")
            return {
                ...state,
                listLoading: true
            }
        case FETCH_POSTS_SUCCESS:
            console.log("reducer")
            return {
                ...state,
                items: action.payload,
                listLoading: false
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...initialState
            }
        case ADD_POST_REQUEST:
            return {
                ...state,
             listLoading:true
            }
            case ADD_POST_SUCCESS:
                return{
                    ...state,
                    items:action.payload
                }
                case ADD_POST_FAILURE:
                    return{
                        listLoading:false
                    }
        default:
            return state;
    }
}
