import React, { PropTypes } from 'react';
import Work from './Home/Work.js';

class Home extends React.Component {
  render () {
    return(
      <div  className = "home">
        <div className = "text">
          欢迎光临<br /><span>我的个人站</span>
        </div>
        <Work />
      </div>
    )
  }
}

export default Home;
