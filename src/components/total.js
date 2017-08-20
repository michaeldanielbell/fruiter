import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../utils/cart';
import { values } from 'lodash';

class Total extends Component {
    getTotal(){
        let total = 0;
        values(this.props.cart).forEach((product, idx) => {
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
