import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  let defaultTitle = 'Default Title'

  let  [state, setState] = useState({
    title: defaultTitle,
    counter: 1
  })

  // let  [count, setCount] = useState({
  //   count: defaultCount
  // })

  console.log(state, '================= 1')

  function changeTitle(updateTitle) {
    setState((prevState) => {
      console.log(prevState, '================ prevState ============')
      // prevState.title =updateTitle
      return {
        ...prevState,
        title: updateTitle
      }
    })
  }

  // function increment(count) {
  //   setCount((prevCount) => {
  //     return {
  //       ...prevCount,
  //       count:prevCount.count + 1
  //     }
  //   })
  // }

  // function decrement(count) {
  //   setCount((prevState) => {
  //       return {
  //         ...prevState,
  //         counter: prevState.counter - count
  //       }
  //     })    
  // }

  // this.setState({})
  function Header(props) {
    return (
      <div>
        <h1>{props.state || state}</h1>
      </div>
    )
  }

  function Content() {
    return (
      <div className="Content">
        <p>
          Silahkan isikan dengan paragraph
        </p>
      </div>
    )
  }

  function Footer() {
    return (
      <div>
        <p>&copy; Test - 2022</p>
      </div>
    )
  }

  function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount)

    useEffect(() => {
      console.log("============ default Value =========")
      setCount(1)
    }, [])

    return (
      <>
        Count: {count}
        <br></br>
        <button onClick={() => setCount(initialCount)}>Reset</button>&nbsp;
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>&nbsp;
        <button onClick={() => {
            if(count > 1) {
              setCount(prevCount => prevCount - 1)
            }
          }
        }>Decrement</button>
      </>
    )
  }

  
  return (
    <div className='App'>
      <Header state={'My Title'}/>
      <hr/>
      <Content/>
      <br/>
      <button onClick={() => changeTitle('Test Title')}>Change Title</button>
      <hr/>
      <Counter initialCount={1}/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default App;