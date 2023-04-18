import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import UserContext from './context/UserContext';
import UserUpdate from './components/userUpdate/UserUpdate';
import './styles/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import MyLibrary from './pages/myLibrary/MyLibrary';
import Register from './pages/register/Register';


function App() {
  const [username, setUsername] = useState('John');
  const [tabs, setTabs] = useState('myLibrary');

  return (
    <UserContext.Provider value={{ username, setUsername, tabs, setTabs }}>
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
          <Route exact path="/mylibrary">
            <MyLibrary />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
