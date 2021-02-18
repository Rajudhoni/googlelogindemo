import React, {useState} from 'react';
import './App.css';
import Gauth from './components/Gauth';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import homepage from './components/homepage';
import profile from './components/profile';


function App() {
  const [state, setState] = useState(false);
  const userInfo = (res)=> {
      console.log("User information", res);
      if(res){
        setState(true);
      }else{
        setState(false);
      }
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Google Auth Demo</h1>
      </header>
      <Gauth userResponse={userInfo} />
    
      <br></br>
      <Switch>
        <Route exact path="/" component={homepage} >
        {state ? <Redirect to="/profile" /> : <homepage />}

        </Route>
        <Route  path="/profile" component={profile} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
