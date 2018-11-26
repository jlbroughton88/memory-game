import React from 'react';
import Header from "./components/Header"
import BigDiv from "./components/BigDiv"
import ClickCard from "./components/ClickCard"
import Wrapper from "./components/Wrapper"
import logos from "./logos.json"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      logos
    }
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array)
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Header />
          <BigDiv />
          <div className="container">
            <div className="row center-align">
              {this.state.logos.map(logo => (
                <ClickCard
                  id={logo.id}
                  name={logo.name}
                  image={logo.image}
                />
              ))}
            </div>
          </div>

          <button onClick={this.shuffleArray}>CLICK ME</button>
        </Wrapper>
      </div>
    );
  }
}

export default App;
