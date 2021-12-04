import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <h2>Statistics</h2>
        <p>
          Good:<span>{good}</span>
        </p>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
        <p>
          Bad:<span>{bad}</span>
        </p>
        <p>
          Total:<span>{total}</span>
        </p>
        {!isNaN(positivePercentage) && (
          <p>
            Positive feedback:<span>{positivePercentage}%</span>
          </p>
        )}
      </>
    );
  }
}

export default Statistics;
