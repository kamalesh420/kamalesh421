import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
console.log(text,results)
  const handleSearch = () => {
    fetch("/api/search?text=" + encodeURIComponent(text))
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error("Failed to search!", error));
  };

  return (
    <div className="App">
      <input
        placeholder="Enter search text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={()=>handleSearch()}>Search</button>

      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.url}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;






































  
  
  
  
  
  
  
  
  
  