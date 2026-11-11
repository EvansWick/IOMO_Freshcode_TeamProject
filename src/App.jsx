import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './pages/Layout';

import './App.css';

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
