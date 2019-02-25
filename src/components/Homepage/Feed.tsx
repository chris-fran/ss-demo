import React from 'react';
import { Section, Container, Title, Subtitle, Columns, Column, Button, Notification } from 'bloomer';

import Post, { Props as PostProps } from './Post';
import { loadPosts } from '../../api/api';

interface BaseTypeProps {
  onNewPostClicked: () => void;
}

interface PostsTypeProps extends BaseTypeProps {
  type: 'POSTS_TYPE';
  posts: PostProps[];
}
interface ErrorTypeProps extends BaseTypeProps {
  type: 'ERROR_TYPE';
  error: Error;
}

export type Props = PostsTypeProps | ErrorTypeProps;

const renderPosts = (posts: PostProps[]) => (
  <Columns isMultiline>
    { posts.map(post => (
      <Column key={post.guid} isSize="1/2">
        <Post {...post} />
      </Column>
      ))}
  </Columns>
);

const renderError = (error: Error) => (
  <Notification isColor="danger">
    There was an error loading the posts
  </Notification>
);

const renderContent = (props: Props) => {
  switch(props.type) {
    case 'POSTS_TYPE':
      return renderPosts(props.posts);
    case 'ERROR_TYPE':
      return renderError(props.error);
  }
}


export const Feed = (props: Props) => (
  <Section>
    <Container>
      <Title>
        News Feed
        <Button
          data-test-id="new-post"
          isColor="primary"
          isSize="small"
          onClick={props.onNewPostClicked}
          isPulled="right"
        >
          New Post
        </Button>
      </Title>
      { renderContent(props) }
    </Container>
  </Section>
);

/**
 * If using redux, the container below is just a HoC
 *
 *   export default connect(mSTP, mDTP)(Feed);
 *
 * However we'll use a regular container component for the example
 */

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
