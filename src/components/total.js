import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import { formatPrice } from '../utils/cart'

class Total extends Component {
    getTotal(){
        let total = 0;
        Object.values(this.props.cart).forEach((product, idx) => {
            total += product.subTotal
        })
        return total;
    }

    render() {
        this.getTotal()
        return (
            <div className="Total">
                Total: ${formatPrice(this.getTotal())}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps)(Total);
