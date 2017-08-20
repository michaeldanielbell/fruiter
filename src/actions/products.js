import Backendless from 'backendless';
import { orderBy } from 'lodash';

const APP_ID = process.env.REACT_APP_APP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

export const getProducts = (payload) => {
    return {
        type: 'GET_PRODUCTS',
        payload
    };
}

export const fetchPosts = () => {
    return dispatch => {
        return Backendless.Persistence.of('products').find()
            .then(payload =>
                dispatch(
                    getProducts(
                        orderBy(payload, ['name'], ['asc'])
                    )
                )
            )
    }
}
