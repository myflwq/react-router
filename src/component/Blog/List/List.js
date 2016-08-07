import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import BlogCard from './BlogCard.js';

class List extends Component {

  constructor(){
    super();
    this.state={
      posts: '',
      wait:true
    }
  }
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/myflwq/react-router/master/posts/index.json')
    .then((res) => {
       this.setState({
         posts: res.data,
         wait:false
       });
    });
  }
  getStyles() {
     return {
       loading:{

         margin:'0 auto',width:'130px',
         height:'200px'
       }
     }
   }
  render(){
    const styles = this.getStyles();
    let x = <div style={styles.loading}><p>正在获取数据......</p><CircularProgress size={1.5} /></div>;
  // console.log(Cards.length);
  // console.log(this.props.search);
    let posts = this.state.posts
    // console.log(posts);
    var blogCards = [];
      if (this.props.search=='') {
        map((b) =>  {
                    blogCards.push(
                      <BlogCard title={b.title} date={b.created_at } index={b.index} url={b.name} key={Math.random()}/>
                    );
                  },
          posts
        );
      }else {
          let query=new RegExp(this.props.search,"i");
          for (var key in posts) {
            if (query.test(posts[key].title)) {
              console.log("aaaa");
              blogCards.push(<BlogCard title={posts[key].title} date={posts[key].date} index={posts[key].index} url={posts[key].name} key={Math.random()}/>)
            }
          }
        }
    return(
      <div>
        {this.state.wait ? x : blogCards}
      </div>
    )
  }
}

export default List;
