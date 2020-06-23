import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // HashRouter
import './index.scss'
import List from '@/views/list';
import Home from '@/views/home';
import My from '@/views/my';
import Header from '@/components/header';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/s' component={My}></Route>
          <Route path='/list' component={List}></Route>
          {/* <Redirect from="/" to="/i" /> */}
        </div>
      </Router>
    );
  }
}

export default Routes;