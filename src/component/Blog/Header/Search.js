import React from 'react'
import SearchBtn from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
  handleInput(e){
    let x = e.target.value;
    // console.log(x);
    this.props.handleSearch(x);
  }
  render () {
    // console.log(this.props.handleSearch);
    let styles={
      searchBtn:{
        color:'#fff',
        position:'absolute',
        bottom:'-5px',
        right:'10px'
      },
      text:{
        width:'60%',
        maxWidth:'600px',
        fontSize:'20px'
      },
      underlineStyle:{
        borderColor:'#fff'
      },
      hintStyle:{
        color:'rgba(255,255,255,0.8)',
        fontSize:'20px'
      },
      inputStyle:{
        color:'#fff'
      }
    }
    return(
      <div className="search">
        <h1 >ALL</h1>
        <div className="clearfix line">
          <span ><SearchBtn style={styles.searchBtn}/></span>
          <TextField
            hintText="搜索"
            underlineFocusStyle={styles.underlineStyle}
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            style={styles.text}
            onChange={this.handleInput.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Search;
