import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        <h2>Please leave feedback</h2>
        {options.map(option => {
          return (
            <button
              key={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
}

export default FeedbackOptions;
