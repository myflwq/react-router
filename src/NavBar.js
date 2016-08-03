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
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="/">首页</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="blog">博客</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="about">关于</Link></MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default NavBar;
