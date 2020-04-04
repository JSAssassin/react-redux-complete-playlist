import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      console.log(res.data);
      this.setState({
        post: res.data
      });
    });
  }

  render() {
    const {post} = this.state;

   return (
     <div>
       <div className="container">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
     </div>
   )
  }
}

export default Post;
