import React, { useState } from 'react';
import './App.css';


function App() {
  // Task 2: Counter
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  // Task 3: Search Filter
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango', 'Orange','Pineapple'];
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='game'>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Task 2: Counter */}
      <div className="counter" style={{ marginBottom: '30px' }}>
        <h1>React task 2</h1>
        <h2>Counter</h2>
        <span style={{ fontSize: '20px' }}>{counter}</span>
        <div style={{ margin: '20px' }}>
          <button onClick={decreaseCounter} style={{ padding: '10px', marginRight: '10px' }}>Decrease</button>
          
          <button onClick={increaseCounter} style={{ padding: '10px', marginLeft: '10px' }}>Increase</button>
        </div>
      </div>

      {/* Task 3: Search Filter */}
      <div className="search-filter">
        <h1>React task 3</h1>
        <h2>Search Filter</h2>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
          {filteredItems.map((item, index) => (
            <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
