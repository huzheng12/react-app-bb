import React, { Component } from 'react';
import './index.scss'
import Zback from '../../components/zuoyi';
import { Link } from 'react-router-dom';
import Kpingcang from '../../components/pingcang';
class Home extends Component {
  render() {
    return (
      <div className="home-wap">
        <Link to="/s">
          111111
        </Link>
        <Zback></Zback>
        <Kpingcang></Kpingcang>
      </div>
    );
  }
}

export default Home;