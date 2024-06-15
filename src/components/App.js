
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
    <p>`Button clicked ${count} times`</p>
        {/* Do not remove the main div */}
    <button onClick={()=>{setCount(count++)}>Click me</button>
    </div>
  )
}

export default App
