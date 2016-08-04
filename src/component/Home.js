import React, { PropTypes } from 'react';

class Home extends React.Component {
  render () {
    let styles={
       root:{
        width:'100vw',
        height:'100vh',
        background: 'url("http://img2.niutuku.com/desk/1207/0852/ntk49327.jpg") no-repeat fixed center center/cover',
        textAlign:'center',
        color:'#fff',
        paddingTop:'45vh',
        fontSize:'30px'
      }
    }
    return(
      <div  style={styles.root}>
      欢迎光临
      </div>
    )
  }
}

export default Home;
