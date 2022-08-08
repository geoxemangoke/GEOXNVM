import './App.css';
import InlineCss from './components/InlineCss';
import LayoutForm from './components/LayoutForm';
import ObjectVariableCSS from './components/ObjectVariableCSS';
import StyleComponent from './components/StyleComponent';
import TestBootStrap from './components/TestBootStrap';

function App() {
  return (
    <div className="App">
      <InlineCss/>
      <ObjectVariableCSS/>
      <StyleComponent/>
      <TestBootStrap/>

      <LayoutForm/>
    </div>
  );
}

export default App;
