import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import { Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';

class App extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  handelOpen(){
      this.refs.navbar.handleToggle();
    }
  render () {
    let styles={
      icon:{
        width: '52px',
        height: '52px',
        position:'absolute',
        top:'8px',
        left:'8px'
      },
      svg: {
        width: '32px',
        height: '32px',

      }
    }
    return(
      <div >
          <IconButton tooltip="menu" style={styles.icon} iconStyle={styles.svg} onClick={this.handelOpen.bind(this)}>
            <MenuButton  color='#fff'/>
          </IconButton>
          <NavBar ref='navbar'/>
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
