import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path='/about' exact>
          <About/>
        </Route>

        <Route path='/contact' exact>
          <Contact/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
