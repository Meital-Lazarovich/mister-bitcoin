import React from 'react';
import './styles/global.scss';
import { Route, Switch } from 'react-router-dom'

import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage';
import ContactDetails from './views/ContactDetails';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/contact/:id" component={ContactDetails}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;