import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cards, { Card } from 'react-swipe-card';
import styles from './swipeStyles';
import * as productActions from '../actions/products';
import * as cartActions from '../actions/cart';

class Swipe extends Component {
    constructor(props) {
    super(props);
        this.state = {
            quantity: 1
        }
    }

    componentDidMount(){
        this.props.productActions.fetchPosts();
    }

    onAddItemToCart = (item) => {
        this.props.cartActions.addToCart(item, this.state.quantity);
        this.setState({quantity: 1 })
    }

    increment = (event) => {
        this.setState({quantity: event.target.value});
    }

    render() {
    const cardItems = this.props.products.map((item, idx) => {
        return(
            <Card
                key={idx}
                onSwipeLeft={() => console.log('%c𝕸𝖊𝖍 𝖓𝖔𝖙 𝖎𝖓𝖙𝖊𝖗𝖊𝖘𝖙𝖊𝖉', "color: #39ffda; font-size:25px;")}
                onSwipeRight={() => this.onAddItemToCart(item)}
            >
                <div style={{...styles.cardBackground, backgroundImage: `url(${item.image})` }} >
                    <h2 style={styles.cardTitle}>{item.name}</h2>
                    <label>Quantity
                        <input
                            type="number"
                            defaultValue={this.state.quantity}
                            onBlur={this.increment}
                        />
                    </label>
                </div>
            </Card>
      )
    });


    return (
        <div>
            <Cards
                onEnd={() => alert('Thats all folks!')}
                style={{...styles.cards}}
                className='master-root'
            >
                {cardItems}
            </Cards>
        </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);
