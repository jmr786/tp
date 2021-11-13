import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Public from "./Routes/Public";
import React from "react";
import Footer from "./Components/Footer";
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
            <BrowserRouter>
              <Public />
            </BrowserRouter>
          
        
      </header>
     
    </div>
  )
}

export default App;
