import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = (event) => {
    //this.props.store.dispatch(addItem());
    //this line of code makes the component reliant on Redux because we are referencing the store
    this.props.addItem()
  }
  //The handleOnClick() does one thing - it dispatches an action to the store.

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

export default connect(state => ({ items: state.items }), { addItem })(App);

//export default connect(mapStateToProps, { addItem })(App);
// Code change: no mapDispatchToProps function required!



//As of JavaScript ES6, when we have an object with a key and value with the same name, we can use the shorthand syntax and write:

// {
//   addItem
// }
// This is all we need to pass in as a second argument for connect().
//
