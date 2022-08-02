import { useState } from 'react';
import './App.css';

function App() {
  let defaultTitle = 'Default Title'

  let  [title, setTitle] = useState({
    title: defaultTitle,
    counter: 0
  })

  console.log(title, '================= 1')

  function changeTitle(updateTitle) {
    setTitle((prevState) => {
      console.log(prevState, '================ prevState ============')
      // prevState.title =updateTitle
      return {
        ...prevState,
        title: updateTitle
      }
    })
  }

  // this.setState({})
  function Header(props) {
    return (
      <div>
        <h1>{props.title || title}</h1>
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

  return (
    <div className='App'>
      <Header title={'My Title'}/>
      <hr/>
      <Content/>
      <br/>
      <button onClick={() => changeTitle('Test Title')}> Change Title</button>
      <hr/>
      <Footer/>
    </div>
  )
}

export default App;