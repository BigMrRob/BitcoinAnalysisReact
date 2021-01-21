import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Price from './pages/Price/Price'
import Difficulty from './pages/Difficulty'
import Searches from './pages/Searches'
import Remaining from './pages/Remaining/Remaining'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/price' component={Price} />
        <Route path='/remaining' component={Remaining} />
        <Route path='/searches' component={Searches} />
        <Route path='/difficulty' component={Difficulty} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
