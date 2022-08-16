import { useState } from "react";

const Calc = () => {
    const[on, setOn] = useState(false);
    const[result, setResult] = useState(' ');

    function onCalcClick(button) {
        if(button.target.name === "=") {
          setResult(eval(result))
        }    
        else if(button.target.name === "AC") {          
          if(on) {
            setOn(false)
            setResult('');
          } else {
            setOn(true);
            setResult('');
          }          
        }    
        else if(button.target.name === "CE") {
          setResult('');
        }
    
        else {
          if(on) {
            setResult(result + button.target.name)
          } else {
            setResult('Please Turn On Calculator!')
          }
        }
      };

    return (
        <>
            <table>
              <thead>
              <tr>
                <th colSpan={4}><input type="text" name="result1" value={result} disabled/></th>                
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div className="button">
                    <button name="AC" onClick={e => onCalcClick(e)}>AC</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="CE" onClick={e => onCalcClick(e)}>CE</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="/" onClick={e => onCalcClick(e)}>/</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="*" onClick={e => onCalcClick(e)}>*</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="button">
                    <button name="7" onClick={e => onCalcClick(e)}>7</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="8" onClick={e => onCalcClick(e)}>8</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="9" onClick={e => onCalcClick(e)}>9</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="-" onClick={e => onCalcClick(e)}>-</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="button">
                    <button name="4" onClick={e => onCalcClick(e)}>4</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="5" onClick={e => onCalcClick(e)}>5</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="6" onClick={e => onCalcClick(e)}>6</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="+" onClick={e => onCalcClick(e)}>+</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="button">
                    <button name="1" onClick={e => onCalcClick(e)}>1</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="2" onClick={e => onCalcClick(e)}>2</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="3" onClick={e => onCalcClick(e)}>3</button>
                  </div>
                </td>
                <td>
                  <div className="button">
                    <button name="=" onClick={e => onCalcClick(e)}>=</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="button">
                    <button name="0" onClick={e => onCalcClick(e)}>0</button>
                  </div>
                </td>
                <td colSpan={2}>
                  <div className="button">
                    <button name="." onClick={e => onCalcClick(e)}>.</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
            
            
        </>
    )
}

export default Calc