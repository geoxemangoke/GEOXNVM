import React from "react";
import PropTypes from 'prop-types'

class Counter extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                <div>{this.props.num}</div>
                <div>
                    <button onClick={() => this.props.increment(1)}>+</button>
                </div>
                <div>
                    <button onClick={() => this.props.decrement(1)}>-</button>
                </div>
                </div>
            </div>
        )
    }

    increment = (n) => {
        this.setState({
          number: this.state.number + 1
        })
      }
    
      decrement = (n) => {
        this.setState({
          number: this.state.number - 1
        })
      }

}

Counter.prototypes = {
    num: PropTypes.string
}

export default Counter