
import './App.css';
import {Route, Switch} from 'react-router-dom';
import infographic from "./infographic/infographic";
import Layout from './layout/layout';
function App() {
  return (
      <>
              <Switch>
                  <Route path="/infographic" exact component={infographic}/>
                  <Route path="/" exact component={Layout}/>
              </Switch>
      </>

  );
}

export default App;
