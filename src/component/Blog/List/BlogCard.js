import React, { Component } from 'react';
import Radium from 'radium'

class BlogCard extends Component {

  render(){
    const styles = {
      left:{
        float:"left",
        width:"12%",
        height:"100px",
        color:'#fff',
        backgroundColor: "#00bcd4",
        borderColor: "#44BBE6",
        lineHeight:"100px",
        textAlign:"center",
        fontWeight: '900',
        fontSize: '18px'

      },
      right:{
        float:"left",
        paddingLeft:"2%",
        width:"86%",
        height:"100px",
        backgroundColor:"#fff",
        borderColor:"#D1DCE0",
      },
      root:{
        width:"95%",
        maxWidth:'850px',
        margin:"20px auto",
        color:'#777777',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
        fontSize: '14px',
        overflow:"hidden",
        ':hover':{
          boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.26), 0 2px 7px 0 rgba(0, 0, 0, 0.22)',
          transition: 'all .5s ease'
        }

      }
    }
    return (
          <div style={styles.root}>
            <div style={styles.left}>{this.props.index}</div>
            <div style={styles.right}>
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
