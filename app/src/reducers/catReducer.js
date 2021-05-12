import { GET_START, GET_SUCCESS, GET_FAIL } from '../actions/personActions'

const initialState = {
    person: {
        name: {
            title: 'Mrs',
            first: 'Paula',
            last: 'Carmona'
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/89.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg"
        },
        email: "isobel.mills@example.com"
    },
    isFetching: false,
    error: ''
};  

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(GET_START):
            return({
                ...state,
                isFetching: true
            })
        case(GET_SUCCESS):
            return({
                ...state,
                person: action.payload,
                isFetching: false
            })
        case(GET_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default: 
            return state;
    }
};