import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "I have three years of experiance as a software engineer.",
      imgSrc: "https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w",
      profession: "Software Engineer"
    },
    show: false,
    interval: null,
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        // Calculate time interval here
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time interval: {this.state.interval}</p>
      </div>
    );
  }
}

export default App;
