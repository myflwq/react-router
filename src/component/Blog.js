import React, { PropTypes } from 'react';
import Header from './Blog/Header/Header';
import List from './Blog/List/List';
import Footer from './Blog/Footer/Footer';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){
    this.setState({
      search:x
    })
  }
  render () {

    return(
      <div>
        <Header change={this.cardSearch.bind(this)}/>
        <List search={this.state.search}/>
        <Footer />
      </div>
    )
  }
}

export default Blog;
