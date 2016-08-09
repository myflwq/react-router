import React, { Component } from 'react';
import Radium from 'radium';
import {hashHistory} from 'react-router';

class BlogCard extends Component {
  // handleClick(){
  //   hashHistory.push(`blog/${this.props.url}`);
  // }
  handleClick(){
      this.context.router.push(`blog/${this.props.url}`);
  }
  render(){
    // console.log(this.context.router);
    return (
          <div  className="list" onClick={this.handleClick.bind(this)}>
            <div className="left">{this.props.index}</div>
            <div className="right">
              <h4>{this.props.title}</h4>
              <p>{this.props.date}</p>
            </div>
          </div>
    )
  }
}
BlogCard.PropTypes = {
  title : React.PropTypes.string.isRequired,
  index : React.PropTypes.number.isRequired,
  date : React.PropTypes.string.isRequired,
}
BlogCard.contextTypes = {
  router:React.PropTypes.object.isRequired
}
BlogCard.defaultProps={
  index:1,
  title:"red",
  date:"2016.6.1"
}
export default Radium(BlogCard);
