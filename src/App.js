
import './App.css';
import {Route, Switch} from 'react-router-dom';
import infographic from "./infographic/infographic";
import Layout from './layout/layout';
import FormPage from "./Form";
function App() {
    return (
        <>

            <Switch>

                <Route path="/infographic" exact component={infographic}/>
                <Route path="/" exact component={Layout}/>
                <Route path='/form' exact component={FormPage}/>
            </Switch>
        </>

    );
}

export default App;
