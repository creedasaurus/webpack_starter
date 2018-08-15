import React from 'react';

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'chicken',
    };
    this.toggleWords = this.toggleWords.bind(this);
  }

  toggleWords() {
    const { word } = this.state;
    this.setState({
      word: word === 'chicken' ? 'nuggets' : 'chicken',
    });
  }

  render() {
    const { word } = this.state;
    return (
      <div>
        <p>
          Toggle the state using the button and then change any text to see that the state remains
        </p>
        <button type="button" onClick={this.toggleWords}>
          Change My Text!
        </button>
        <div>
          {word}
        </div>
      </div>
    );
  }
}

export default StateComponent;
