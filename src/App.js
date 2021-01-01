import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {

  state =
    {
      wordLength: 0,
      chars: []
    }

  onChangeListener = (event) => {
    const wordString = [...event.target.value]
    const wordLength = wordString.length
    this.setState({ wordLength: wordLength })
    this.setState({ chars: [...wordString] })
  }

  deleteChar = (index) => {
    const chars = [...this.state.chars]
    chars.splice(index, 1)
    this.setState({ chars: chars })
  }

  render() {
    let charlist = [];
    if (this.state.chars.length > 0) {
      charlist = (
        <div>
          {this.state.chars.map((char, index) => {
            return <CharComponent char={char} key={index} delete={() => this.deleteChar(index)} />
          })}
        </div>
      )
    }

    return (
      <div className='App'>
        <input type="text" onChange={(event) => this.onChangeListener(event)} />
        <p>{this.state.wordLength}</p>
        <ValidationComponent wordLength={this.state.wordLength} />
        {charlist}
      </div>
    )
  }
}

export default App;

