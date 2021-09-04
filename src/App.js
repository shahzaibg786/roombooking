
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />
      <Switch >
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/rooms/" component = {Rooms}/>
      <Route exact path = "/rooms/:slug" component = {SingleRoom}/>
      <Route component = {ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
