export const addToCart = (item, quantity) => {
    return {
        type: 'ADD_TO_CART',
        item,
        quantity
    };
}
