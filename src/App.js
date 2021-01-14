import './App.css';
import { Route,Switch, Redirect } from "react-router-dom"
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'
import NotFound from './features/NotFound'
function App() {
  return (
    <div className="App">
      Header
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:xxx" to="/" exact />
        <Route path="/" component={TodoFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
