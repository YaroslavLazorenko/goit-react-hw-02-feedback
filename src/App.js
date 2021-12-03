import { Component } from 'react';
import './App.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = { ...INITIAL_STATE };

  onGoodButtonClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutralButtonClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBadButtonClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <h1>Welcome to Feedback statistics application!</h1>
        <h2>Please leave feedback</h2>
        <button onClick={this.onGoodButtonClick}>Good</button>
        <button onClick={this.onNeutralButtonClick}>Neutral</button>
        <button onClick={this.onBadButtonClick}>Bad</button>
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
          Total:<span>{this.countTotalFeedback()}</span>
        </p>
        {!isNaN(this.countPositiveFeedbackPercentage()) && (
          <p>
            Positive feedback:<span>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        )}
      </div>
    );
  }
}

export default App;
