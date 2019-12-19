import React from 'react';
import './styles/global.scss';
import { Route, Switch } from 'react-router-dom'

import HomePage from './modules/common/views/HomePage'
import ContactPage from './modules/contact/views/ContactPage';
import ContactDetails from './modules/contact/views/ContactDetails';
import ContactEdit from './modules/contact/views/ContactEdit';
import Header from './modules/common/cmps/Header';
import SignupPage from './modules/user/views/SignupPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/contact/edit/:id?" component={ContactEdit}></Route>
          <Route exact path="/contact/:id" component={ContactDetails}></Route>
          <Route exact path="/signup" component={SignupPage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
