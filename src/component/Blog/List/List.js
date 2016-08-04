import React, { Component } from 'react';
import map from 'lodash/fp/map';
import BlogCard from './BlogCard.js';

let blogs = [
  {index:'1', title:'HTML',date:'2016.7.19'},
  {index:'2', title:'这是第二天',date:'2016.7.21'},
  {index:'3', title:'这是第三天',date:'2016.7.22'},
  {index:'4', title:'这是第四天',date:'2016.7.22'},
  {index:'5', title:'这是第五天',date:'2016.7.22'},
  {index:'6', title:'React',date:'2016.7.22'},
  {index:'7', title:'JAVA',date:'2016.7.22'}
]

class List extends Component {
  render(){
  // console.log(Cards.length);
  // console.log(this.props.search);
  var blogCards = [];
    if (this.props.search=='') {
      map((b) => {blogCards.push(<BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs);
    }else {
      let query=new RegExp(this.props.search,"i");
      for (var i = 0; i < blogs.length; i++) {
        if (query.test(blogs[i].title)) {
          blogCards.push(<BlogCard title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()}/>)
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
