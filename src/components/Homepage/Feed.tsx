import React from 'react';
import { Section, Container, Title, Subtitle, Columns, Column, Button, Notification } from 'bloomer';

import Post, { Props as PostProps } from './Post';

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

export default Feed;
