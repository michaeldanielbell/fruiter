import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../utils/cart'
import styles from './cartStyles';
import Total from './total';
import { values } from 'lodash';

class Cart extends Component {

  render() {
    const cartList = values(this.props.cart).map((product, idx) => {
        return <li key={idx}>
            {product.quantity} x {product.item.name}
            <span style={styles.price}>${formatPrice(product.subTotal)}</span>
        </li>;
    });
    return (
        <div className="Cart">
            <img style={styles.logo} src="/assets/cart.svg" alt="Cart" />
            <ul style={styles.cartItems}>
                {cartList}
            </ul>
            <Total/>
        </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps)(Cart);
