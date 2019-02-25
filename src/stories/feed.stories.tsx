import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Feed, Props } from '../components/Homepage/Feed';

const defaultProps: Props = {
  onNewPostClicked: action('button clicked'),
  posts: [{
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
  }, {
    user: {
      name: 'Christopher Francisco',
      username: 'ReijiS2',
      avatarUrl: 'https://via.placeholder.com/96x96',
    },
    guid: 'ce4d5cba-33ef-4e10-8fdf-bbd6737b32ba',
    imageUrl: undefined,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nunc non metus eleifend, id ornare nulla sollicitudin. Phasellus blandit lacus vitae ullamcorper lobortis. Vivamus in neque tortor.',
    createdAt: new Date('2019-02-24T00:21:15.925Z'),
    isMine: true,
  }, {
    user: {
      name: 'John Doe',
      username: 'johndoe',
      avatarUrl: 'https://via.placeholder.com/96x96',
    },
    guid: 'ce4d5cba-33ef-4e10-8fdf-bbd6737b32ba',
    imageUrl: 'https://via.placeholder.com/600x450',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nunc non metus eleifend, id ornare nulla sollicitudin. Phasellus blandit lacus vitae ullamcorper lobortis. Vivamus in neque tortor.',
    createdAt: new Date('2019-02-24T00:21:15.925Z'),
    isMine: false,
  }, {
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
  }],
};

storiesOf('Feed', module)
  .add('with a list of posts', () => (
    <Feed {...defaultProps} />
  ));
