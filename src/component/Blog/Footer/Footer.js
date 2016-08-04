import React from 'react';

class Footer extends React.Component {
  getStyles() {
    return {
      footer: {
        height:'200px',
        color: '#fff',
        backgroundColor: '#212121',
        textAlign:'center',
        lineHeight:'200px',
        fontSize: '30px'
      }
    }
  }

  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.footer}>
      footer
      </div>
    )
  }
}



export default Footer;
