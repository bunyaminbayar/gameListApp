import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import UserContext from './context/UserContext';
import UserUpdate from './components/userUpdate/UserUpdate';
import './styles/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import MyLibrary from './pages/myLibrary/MyLibrary';
import Register from './pages/register/Register';
import MyStore from './pages/myStore/MyStore';

function App() {
  const [username, setUsername] = useState('John');

  return (
    <UserContext.Provider value={{ username, setUsername}}>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <UserUpdate />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/myLibrary">
            <MyLibrary />
          </Route>
          <Route exact path="/myStore">
            <MyStore />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
