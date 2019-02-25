import React from 'react';


import Post, { Props as PostProps } from './Post';
import { Section, Container, Title, Subtitle, Columns, Column, Button } from 'bloomer';

export interface Props {
  onNewPostClicked: () => void,
  posts: PostProps[],
};

export const Feed = ({ onNewPostClicked, posts }: Props) => (
  <Section>
    <Container>
      <Title>
        News Feed
        <Button
          data-test-id="new-post"
          isColor="primary"
          isSize="small"
          onClick={onNewPostClicked}
          isPulled="right"
        >
          New Post
        </Button>
      </Title>
      <Columns isMultiline>
        { posts.map(post => (
          <Column key={post.guid} isSize="1/2">
            <Post {...post} />
          </Column>
        ))}
      </Columns>
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

export interface State {
  posts: PostProps[],
};

class FeedContainer extends React.Component<{}, State> {
  state: State = {
    posts: [],
  };

  componentDidMount() {
    // Simulate an API call
    const posts: PostProps[] = [{
      user: {
        name: 'John Doe',
        username: 'johndoe',
        avatarUrl: 'https://via.placeholder.com/96x96',
      },
      guid: 'ce4d5cba-33ef-4e10-8fdf-bbd6737b32ba',
      imageUrl: undefined,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nunc non metus eleifend, id ornare nulla sollicitudin. Phasellus blandit lacus vitae ullamcorper lobortis. Vivamus in neque tortor.',
      createdAt: new Date('2019-02-24T00:21:15.925Z'),
      isMine: false,
    }];

    return new Promise(resolve => setTimeout(() => this.updatePosts(posts), 500));
  }

  updatePosts(posts: PostProps[]) {
    this.setState({ posts });
  }

  handleNewPost() {
    console.log('Not implemented yet');
  }

  render() {
    const { posts } = this.state;

    return (
      <Feed
        onNewPostClicked={this.handleNewPost}
        posts={posts}
      />
    );
  }
}

export default FeedContainer;
