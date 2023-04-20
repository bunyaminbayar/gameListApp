import React, { useState } from 'react';
import './styles/global.css';
import Topbar from './components/topbar/Topbar';
import LanguageContext from './context/LanguageContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import MyLibrary from './pages/myLibrary/MyLibrary';
import Register from './pages/register/Register';
import MyStore from './pages/myStore/MyStore';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {

  // set default global language.
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage}}>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
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
        <Footer />
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
