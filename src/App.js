import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Fragment>
  );
}

export default App;
