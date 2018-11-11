import React, { Component } from 'react';
import ClickCard from ".components/ClickCard.js"
import cards from "./cards.json"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col s12">
            <div class="col s4">
              <h2>Clicky Game!</h2>
            </div>
            <div class="col s4">
              <h3>You guessed correctly/incorrectly!</h3>
            </div>
            <div class="col s4">
              <h3>Score:  |  High Score:  </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <h2>Clicky Game!</h2>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            <ClickCard
              name={cards[0].name}
              image={cards[0].image} />
          </div>
        </div>
        <div class="row">
          <div class="col s12">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
