import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    console.log("============ constructor ============")
    this.state = {
      people: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log( this.state, '(==============')

    return true
  }

  async componentDidMount() {
    console.log('=============== didMount ===================')

    const res = await axios.get('https://swapi.dev/api/people')
    // https://api.currencyfreaks.com/latest
    this.setState({
      people: res.data.results
    })
  }

  render() {
    const isLoading = this.state.people.length === 0
    console.log('=================== Render ===================')
    return (
      <div className='App'>
        <ul>
          { 
            isLoading ?
            <b>.... Loading</b>
            :
            this.state.people.map((data, index) => {
            return <li key={index}>name : {data.name}, 
            height : {data.height}</li>
          })
          }
        </ul>
      </div>
    )
  }
}

export default App;
