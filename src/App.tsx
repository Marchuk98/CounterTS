import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display";
import SuperButton from "./components/SuperButton";

function App() {

  let [increment, setIncrement] = useState(0);

  let maxLimit = 5;
  const incrementCallback = () => {
    increment < maxLimit && setIncrement(increment +1);
  }

  const resetResultCallback = () => {
    setIncrement(0);
  }

  const incDisabled = increment === 5;
  const resetDisabled = increment === 0;

  return(
      <div className='App'>
        <Display count={increment} limit={maxLimit}/>
        <div className={'AppButtonBlock'} >
          <SuperButton name={'incr'} callBack={incrementCallback} disabled={incDisabled} />
          <SuperButton name={'reset'} callBack={resetResultCallback} disabled={resetDisabled}/>
        </div>
      </div>
  );
}

export default App;