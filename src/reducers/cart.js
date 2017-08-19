import { calculateSubTotal } from '../utils/cart';

export default(state = [], payload) => {
    switch (payload.type) {
        case 'ADD_TO_CART':
            const productID = payload.item.objectId;
            return {...state,
                [productID] : {
                    item: payload.item,
                    quantity: payload.quantity,
                    subTotal: calculateSubTotal(payload)
                }
            };
        default:
            return state;
    }
};
