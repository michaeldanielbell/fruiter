import React, { Component } from 'react';
import './App.css';

import Cart from './components/cart';
import Swipe from './components/swipe';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Cart/>
                <Swipe/>
            </div>
        );
    }
}

export default App;
