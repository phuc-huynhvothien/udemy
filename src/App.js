import './App.css';
import { Route,Switch, Redirect,NavLink } from "react-router-dom"
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'
import NotFound from './features/NotFound'
function App() {
  return (
    <div className="App">
      Header
      <p><NavLink to="/todos">Todo</NavLink>  </p>
      <p><NavLink to="/albums">Album</NavLink>  </p>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
