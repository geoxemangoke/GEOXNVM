import React from "react";
import './App.css'

class User extends React.Component {
  render() {
      return (
        <div>
          <div>
          username: {this.getUsername()}
        </div>
        <div>
          email: {this.state.email}
        </div>
        <div>
          <button onClick={this.changeUsername}>change username</button>
        </div>
        </div>
      )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username : "udin",
      email : "udin@gmail.com",
      password : "test",
      number: 0
    }
    this.changeUsername = this.changeUsername.bind(this)
  }

  getUsername() {
    return this.state.username
  }
  
  changeUsername() {
    this.setState ({
      username: 'bambang'
    })
  }

  increment = (n) => {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrement = (n) => {
    this.setState({
      number: this.state.number - 1
    })
  }
  
  render() {
    console.log('render')
    return (
      <div>
        <User email={this.state.email}/>
        <div>
          <button onClick={this.changeUsername}>change username</button>
        </div>
        <div className="App">
          <div>{this.state.number}</div>
          <div>
            <button onClick={() => this.increment(1)}>+</button>
          </div>
          <div>
            <button onClick={() => this.decrement(1)}>-</button>
          </div>
        </div>
      </div>
    )
  }
}



// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>QTemu Meet Up</div>
//       </header>
//     </div>
//   );
// }

export default App;
