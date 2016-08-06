import React, { Component } from 'react';
import map from 'lodash/fp/map';
import BlogCard from './BlogCard.js';
import axios from 'axios';


class List extends Component {
  constructor(){
    super();
    this.state={
      posts: ''
    }
  }
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/myflwq/react-router/master/posts/index.json')
    .then((res) => {
       this.setState({
         posts: res.data
       });
    });
  }
  render(){

  // console.log(Cards.length);
  // console.log(this.props.search);
  let posts = this.state.posts
  console.log(posts);
  var blogCards = [];
    if (this.props.search=='') {
      map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.created_at } index={b.index} key={Math.random()}/>
                  );
                },
        posts
      );
    }else {
        let query=new RegExp(this.props.search,"i");
        for (var key in posts) {
          if (query.test(posts[key].title)) {
            console.log("aaaa");
            blogCards.push(<BlogCard title={posts[key].title} date={posts[key].date} index={posts[key].index} key={Math.random()}/>)
          }
        }
      }
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
