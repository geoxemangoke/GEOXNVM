import React from "react";
import './App.css'
import Counter from './component/Counter'

class User extends React.Component {
  render() {
      return (
        <div>
          <div>
          username: {this.props.username}
        </div>
        <div>
          email: {this.props.email}
        </div>
        <div>
          <button onClick={this.props.changeUsername}>change username</button>
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
        <User email={this.state.email} 
            username={this.getUsername()}
              changeUsername={this.changeUsername}
        />
        
        <Counter 
          num={this.state.number}
          increment={this.increment}
          decrement={this.decrement}/>
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
