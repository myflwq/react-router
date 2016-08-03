import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle(){
    this.setState({open: !this.state.open});
  }
  handleClose(){
    this.setState({open: false});
  }
  render () {
    let styles={
      title:{
        color:'#fff',
        fontSize:'32px',
        lineHeight:'64px',
        textAlign:'center',
        backgroundColor:'#00BCD4',
        marginBottom:'20px'
      },
      menu:{
        textAlign:'center'
      },
      link:{
         textDecoration:'none',
         display:'block',
         color:'#333'
      }
    }
    return(
      <div>
        <Drawer
          docked={false}
          width={256}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <p style={styles.title}>好多视频网</p>
          <div style={styles.menu}>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/" activeStyle={{color: '#E91E63'}} style={styles.link} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="blog" activeStyle={{color: '#E91E63'}} style={styles.link}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="about" activeStyle={{color: '#E91E63'}} style={styles.link}>关于</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default NavBar;
