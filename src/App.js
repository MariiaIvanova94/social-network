import './App.css';
// import './reset.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';

import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Navbar />
        <div className="container__item">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
