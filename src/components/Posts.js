import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { postsActions } from '../store';


class Posts extends Component {
  componentWillMount() {
    const { getPostsList } = this.props;
    getPostsList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }


  render() {
    const { posts } = this.props;
    console.log("hhhh", posts);
    const postItems = this.props.posts.map(post => (<div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>))
    return (
      <div>
        {postItems}
      </div>
    )
  }
}
Posts.propTypes = {
  // fetchPosts:PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  getPostsList: PropTypes.func.isRequired,
  newPost:PropTypes.object
}

const mapStateToProps = state => {
  console.log(state, "state")
  return (
    {
      posts: state.posts.items,
      newPost: state.posts.item
    })
};

// const mapDispatchToProps = dispatch =>({
//   getPostsList:()=>dispatch(postsActions.fetchPosts())
//   });

const mapDispatchToProps = dispatch => {
  return {
    getPostsList: () => {
      dispatch(postsActions.fetchPosts());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)