import './App.css';
import Main from './views/Main';
import { Route, Switch } from 'react-router-dom';
import Create from './views/Create';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/pets/new'>
          <Create />
        </Route>
        <Route exact path='/pets/:_id'>
          <Details />
        </Route>
        <Route exact path='/pets/update/:_id'>
          <Update />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
