import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Header/>
     </div>
     <Route path="/" component={} />
     <Route path="/about" component={} />
     <Route path="/profile" component={} />
    </BrowserRouter>
 
  );
}

export default App;
