import React from 'react';

import Post, { Props as PostProps } from './Post';
import { Section, Container, Title, Subtitle, Columns, Column } from 'bloomer';

export interface Props {
  onNewPostClicked: () => void,
  posts: PostProps[],
};

const Feed = ({ onNewPostClicked, posts }: Props) => (
  <Section>
    <Container>
      <Title>News Feed</Title>
      <Subtitle>
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </Subtitle>
      <Columns isMultiline>
        { posts.map(post => (
          <Column isSize="1/2">
            <Post {...post} />
          </Column>
        ))}
      </Columns>
    </Container>
  </Section>
);

export default Feed;
