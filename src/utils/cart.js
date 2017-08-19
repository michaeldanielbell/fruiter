// Discount 3 for the price of 2
const discount3for2 = (price, quantity) => {
    let radix = 10; // 10 for the decimal numeral system commonly used by humans
    let discountedItems = parseInt(quantity / 3, radix);
    let totalAmount = price * quantity - (discountedItems * price);

    return totalAmount
}

// Format cents to dollars/euros
export const formatPrice = (price) => parseFloat(price / 100).toFixed(2);

// Calculate Subtotals and apply discount if applicable
export const calculateSubTotal = (payload) => {
    const price = payload.item.amount;
    const quantity = payload.quantity;
    const discount = payload.item.discount;

    const discounts = {
        '3-for-2': discount3for2(price, quantity)
    }

    return discount ? discounts[discount] : price * quantity;
}
