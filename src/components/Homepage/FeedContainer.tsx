/**
 * If using redux, the container below is just a HoC
 *
 *   export default connect(mSTP, mDTP)(Feed);
 *
 * However we'll use a regular container component for the example
 */
import React from 'react';

import { loadPosts } from '../../api/api';
import { Props as PostProps } from './Post';
import Feed from './Feed';

interface PostTypeState {
  type: 'POSTS_TYPE';
  posts: PostProps[];
};
interface ErrorTypeState {
  type: 'ERROR_TYPE';
  error: Error,
};

type State = PostTypeState | ErrorTypeState;

class FeedContainer extends React.Component<{}, State> {
  state: State = {
    type: 'POSTS_TYPE',
    posts: [],
  };

  componentDidMount() {
    return loadPosts()
      .then(posts => this.setState({ type: 'POSTS_TYPE', posts }))
      .catch(error => this.setState({ type: 'ERROR_TYPE', error }));
  }

  handleNewPost() {
    console.log('Not implemented yet');
  }

  render() {
    return (
      <Feed
        onNewPostClicked={this.handleNewPost}
        {...this.state}
      />
    );
  }
}

export default FeedContainer;
