import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counter';
import FAQS from './FAQS';

function App() {
  const counter = useSelector((state)=>{
    return state.counter.counter;
  })

  const dispatcher = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatcher(increment())}>+</button>
      <button onClick={()=>dispatcher(decrement())}> - </button>
      <hr />
      <h1>Frequently Asked Questions</h1>
      <FAQS></FAQS>

    </div>
  );
}

export default App;
