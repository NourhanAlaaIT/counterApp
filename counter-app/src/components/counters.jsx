import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
      const {onReset, counters, onDelete, onIncrement} = this.props
    return (
      <div className="counters">
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
