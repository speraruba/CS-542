import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Login from './components/login/login'
import Register from './components/register/register'
import Supplyer from './components/supplyer/supplyer'
import {BrowserRouter as Route} from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom'
ReactDOM.render(
  
<Switch>
  <div>
 <Route path='/login'>
   <Login />
 </Route> 
 {/* <Route path='/register'>
   <Register />
 </Route>  */}
 {/* <Route path='/supplyer'>
   <Supplyer />
 </Route> */}

   
    
{/* <Login /> */}
</div>
  </Switch>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
