import React from 'react';

import Post, { Props as PostProps } from './Post';
import { Section, Container, Title, Subtitle, Columns, Column, Button } from 'bloomer';

export interface Props {
  onNewPostClicked: () => void,
  posts: PostProps[],
};

const Feed = ({ onNewPostClicked, posts }: Props) => (
  <Section>
    <Container>
      <Title>
        News Feed
        <Button
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

export default Feed;
