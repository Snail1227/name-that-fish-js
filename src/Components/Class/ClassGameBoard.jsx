import { Component } from 'react';

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessFishName: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAnswer(this.state.guessFishName);
    this.setState({ guessFishName: '' });
  }

  render() {
    const { fishData } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input 
            type="text" 
            name="fish-guess" 
            value={this.state.guessFishName}
            onChange={(e) => {
              this.setState({ guessFishName: e.target.value });
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
