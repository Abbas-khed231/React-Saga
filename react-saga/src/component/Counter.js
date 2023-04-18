import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <>
      <div>
        <h1>Counter:0</h1>
      </div>
      <div>
        <button>Increment</button>
      </div>
      <div>
        <button>Decrement</button>
      </div>
      </>
    )
  }
}

export default Counter;
