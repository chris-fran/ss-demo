import React from 'react';
import { storiesOf } from '@storybook/react';

import Post, { Props } from '../components/Homepage/Post';

const Box = ({ children }: { children: React.ReactNode; }) => (
  <div style={{ width: 600 }}>{ children }</div>
);


const defaultProps: Props = {
  user: {
    name: 'Christopher Francisco',
    username: 'ReijiS2',
    avatarUrl: 'https://via.placeholder.com/96x96',
  },
  guid: '45b8b7af-75d2-4711-904c-5802b1c8e342',
  imageUrl: undefined,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nunc non metus eleifend, id ornare nulla sollicitudin. Phasellus blandit lacus vitae ullamcorper lobortis. Vivamus in neque tortor.',
  createdAt: new Date('2019-02-24T00:21:15.925Z'),
  isMine: false,
};

storiesOf('Post', module)
  .addDecorator(storyFn => <Box>{ storyFn() }</Box>)
  .add('default', () => (
    <Post {...defaultProps} />
  ))
  .add('with image', () => (
    <Post {...defaultProps } imageUrl='https://via.placeholder.com/600x450' />
  ))
  .add('created by me', () => (
    <Post {...defaultProps} isMine />
  ));
