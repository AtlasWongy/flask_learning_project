import './App.css';
import { TodoPage } from './pages/TodoPage';
import { Show } from './pages/Show'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoPage/>}/> 
          <Route exact path = "/:id" element={<Show/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{/* <div className='App'>
      <Router>
        <Routes>
          <Route path = '/'>
            <TodoPage/>
          </Route>
        </Routes>
    </Router>
    </div>   */}