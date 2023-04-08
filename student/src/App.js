
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Student from './components/Student';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Router>
      <Routes>
        <Route path='/' element={<Student/>}/>
      </Routes>
     </Router>
      </header>
    </div>
  );
}

export default App;
