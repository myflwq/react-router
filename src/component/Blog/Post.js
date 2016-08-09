import React, { PropTypes } from 'react'
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import CircularProgress from 'material-ui/CircularProgress';

class Post extends React.Component {
  constructor(){
    super();
    this.state={
      posts: '',
      wait:true
    }
  }
  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/myflwq/react-router/master/posts/${this.props.params.title}.md?v=${Math.random()}`)
    .then((res) => {
      // console.log(res);
       this.setState({
         posts: res.data,
         wait:false
       });
    });
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
      let x = <div><p>正在加载......</p><CircularProgress size={1.5} /></div>;
      let y = <div
              dangerouslySetInnerHTML={{
            __html: marked(this.state.posts)
          }}
        />
    return(
      <div className = "post">
      {this.state.wait ? x : y}
      </div>
    )
  }
}

export default Post;
