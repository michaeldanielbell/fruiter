export default(state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return [...action.payload, ...state];
        default:
            return state;
    }
};
