import React from 'react';
// import Button from './NavButton';
import Search from './Search';
class Header extends React.Component {
  getStyles() {
    return {
      root: {

        color: '#fff',
        backgroundColor: '#00bcd4',
        textAlign:'center',
        fontSize: '30px',
      }
    }
  }
  render () {
    // console.log(this.props.change);
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        <Search handleSearch={this.props.change}/>
      </div>
    )
  }
}

export default Header;
