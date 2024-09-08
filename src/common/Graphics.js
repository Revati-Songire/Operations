
import { useState } from 'react';
import './Graphics.css'
function App() {
  const [data, setData] = useState([]);
  const [firstNo, setFirstNo] = useState('');
  const [secondNo, setSecondNo] = useState('');
  const [operation, setOperation] = useState('+');

  const getStyle = (operation) => ({
    width: '20px',
    height: '20px',
    margin: '5px',
    display: 'inline-block',
    backgroundColor: operation === '+' ? 'Tomato' : operation === '-'
      ? 'MediumSeaGreen' : operation === '*' ? 'Crimson' : 'Violet'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const first = parseInt(firstNo);
    const second = parseInt(secondNo);

    let result;
    if (operation === '+') {
      result = first + second;
    } else if (operation === '-') {
      result = first - second;
    } else if (operation === '*') {
      result = first * second;
    } else {
      result = first / second;
    }

    setData([...data, { first, second, operation, result }]);
    setFirstNo('');
    setSecondNo('');
    setOperation('+');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' className='input1'   placeholder='Enter First Number' value={firstNo} onChange={(e) => setFirstNo(e.target.value)} />
        <input type='text' className='input2' placeholder='Enter Second Number' value={secondNo} onChange={(e) => setSecondNo(e.target.value)} /><br/><br/>
        <label>Select Operation :</label>
        <select value={operation} placeholder="Select Operation"  onChange={(e) => setOperation(e.target.value)}>
          <option value='+'>Add</option>
          <option value='-'>Sub</option>
          <option value='*'>Mul</option>
          <option value='/'>Div</option>
        </select><br/>
        <button type='submit'>Calculate</button>
      </form>

      {data.map((ele, index) => (
        <div key={index} style={{ height: 'auto', display: 'inline-block', border: '2px solid black', margin: '10px' }}>
          <h3>
            {ele.operation === '+'
              ? "Addition"
              : ele.operation === '-'
                ? "Subtraction"
                : ele.operation === '*'
                  ? "Multiplication"
                  : "Division"}
          </h3>
          <div style={{ height: 'auto', display: 'inline-block', padding: '10px' }}>
            <div style={{ marginRight: '10px' }}>{ele.first} {ele.operation} {ele.second} = {ele.result}</div>
            <div>
              {Array.from({ length: ele.first }).map((_, index) => (
                <div key={index} style={getStyle(ele.operation)}></div>
              ))}
            </div>
            <div>
              {Array.from({ length: ele.second }).map((_, index) => (
                <div key={index} style={getStyle(ele.operation)}></div>
              ))}
            </div>
            <div>
              {Array.from({ length: ele.result }).map((_, index) => (
                <div key={index} style={getStyle(ele.operation)}></div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default App;