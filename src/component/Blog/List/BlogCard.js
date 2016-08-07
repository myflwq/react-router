import React, { Component } from 'react';
import Radium from 'radium';
import {hashHistory} from 'react-router';

class BlogCard extends Component {
  handleClick(){
    hashHistory.push(`blog/${this.props.url}`);
  }
  render(){
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
BlogCard.defaultProps={
  index:1,
  title:"red",
  date:"2016.6.1"
}
export default Radium(BlogCard);
