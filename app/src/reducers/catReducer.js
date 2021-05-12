

const initialState = {
    person: {
        name: {
            title: 'Mrs',
            first: 'Paula',
            Last: 'Carmona'
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/89.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg"
        }
    },
    isFetching: false,
    error: ''
};  

export const reducer = (state, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};