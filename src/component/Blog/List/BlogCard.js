import React, { Component } from 'react';
import Radium from 'radium'

class BlogCard extends Component {

  render(){
    return (
          <div  className="list">
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
  date:"red"
}
export default Radium(BlogCard);
