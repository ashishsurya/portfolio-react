import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/projects' element={<ProjectsScreen />} />
      </Routes>
    </Fragment>
  );
}

export default App;
