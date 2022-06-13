import { Fragment, useState } from 'react';
import Navbar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

function App() {
  const [screen, setScreen] = useState('home');

  if (screen === 'home') {
    return (
      <Fragment>
        <Navbar screen={screen}  setScreen={setScreen} />
        <HomeScreen />
      </Fragment>
    );
  } else if (screen === 'projects') {
    return (
      <Fragment>
        <Navbar screen={screen} setScreen={setScreen} />

        <ProjectsScreen />
      </Fragment>
    );
  } else if (screen === 'experience') {
    return (
      <Fragment>
        <Navbar screen={screen} setScreen={setScreen} />
      </Fragment>
    );
  }
}

export default App;
