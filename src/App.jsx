import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './pages/Layout';

import './App.css';
import FilterPage from './pages/FilterPage';

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='filter' element={<FilterPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
