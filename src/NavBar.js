import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title:''
    };
  }
  handleToggle(){
    this.setState({open: !this.state.open});
  }
  handleClose(){
    this.setState({open: false});
  }
  componentWillReceiveProps() {
     this.setNavState();
  }
  componentDidMount(){
    this.setNavState();
  }
  setNavState(){
    this.setState({
      title:this.context.router.isActive('/', true) ? 'HOME' :
        this.context.router.isActive('/blog')? 'BLOG' :
        this.context.router.isActive('/account')? 'ACCOUNT' :
        this.context.router.isActive('/about')? 'ABOUT' : 'HOME'
    });
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
          <p style={styles.title}>{this.state.title}</p>
          <div style={styles.menu}>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/" activeStyle={{color: '#E91E63'}} style={styles.link} onlyActiveOnIndex={true}>HOME</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="blog" activeStyle={{color: '#E91E63'}} style={styles.link}>BLOG</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="account" activeStyle={{color: '#E91E63'}} style={styles.link}>ACCOUNT</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="about" activeStyle={{color: '#E91E63'}} style={styles.link}>ABOUT</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}
NavBar.contextTypes = {
  router:React.PropTypes.object.isRequired
}
export default NavBar;
