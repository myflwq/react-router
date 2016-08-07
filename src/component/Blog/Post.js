import React, { PropTypes } from 'react'
import axios from 'axios';
import marked from 'marked';
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
    axios.get(`https://raw.githubusercontent.com/happypeter/big-demo/master/posts/${this.props.params.title}.md`)
    .then((res) => {
      // console.log(res);
       this.setState({
         posts: res.data,
         wait:false
       });
    });
  }
  render () {
      let x = <div><p>正在加载......</p><CircularProgress size={1.5} /></div>;
      let y = <div
              dangerouslySetInnerHTML={{
            __html: marked(this.state.posts)
          }}
        />
    return(
      <div>
      {this.state.wait ? x : y}
      {this.props.params.title}
      </div>
    )
  }
}

export default Post;
