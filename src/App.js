import './App.css';
import { useState } from 'react';
import Graphics from './common/Graphics';
function App() {

  const [data, setData] = useState([
    {First: 2, Second: 2, Operation: '+' },
    {First: 3, Second: 2, Operation: '*' },
    {First: 4, Second: 1, Operation: '-' },
    {First: 6, Second: 2, Operation: '/' }
  ]);

  const getStyle = (Operation) => ({
    width: '20px',
    height: '20px',
    margin: '5px',
    display: 'inline-block',
    backgroundColor: Operation === '+' ? 'Tomato' : Operation === '-'
    ? 'MediumSeaGreen' : Operation === '*' ? 'Crimson' : 'Violet'
  });

  return (
    <div className="App">
      <Graphics />
      {data.map((ele, index) => {
        let result;
        if (ele.Operation === '+') {
          result = ele.First + ele.Second;
        } else if (ele.Operation === '-') {
          result = ele.First - ele.Second;
        } else if (ele.Operation === '*') {
          result = ele.First * ele.Second;
        } else {
          result = ele.First / ele.Second;
        }

        return (
          <div key={index} style={{ height: 'auto', display: 'inline-block', border: '2px solid black', margin: '10px' }}>
            <h3>
              {ele.Operation === '+'
                ? "Addition"
                : ele.Operation === '-'
                  ? "Subtraction" 
                  : ele.Operation === '*'
                    ? "Multiplication"
                    : "Division"}
            </h3>
            <div style={{ height: 'auto', display: 'inline-block', padding: '10px' }}>
              <div style={{ marginRight: '10px' }}>{ele.First} {ele.Operation} {ele.Second} = {result}</div>
              <div>
                {Array.from({ length: ele.First }).map((_, index) => (
                  <div key={index} style={getStyle(ele.Operation)}> </div>
                ))}
              </div>
              <div>
                {Array.from({ length: ele.Second }).map((_, index) => (
                  <div key={index} style={getStyle(ele.Operation)}></div>
                ))}
              </div>
              <div>
                {Array.from({ length: result }).map((_, index) => (
                  <div key={index} style={getStyle(ele.Operation)}></div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;



