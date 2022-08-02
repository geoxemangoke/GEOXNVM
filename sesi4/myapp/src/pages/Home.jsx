import React from 'react'

export default class Home extends React.Component {
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