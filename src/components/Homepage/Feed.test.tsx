import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { shallow } from 'enzyme';

import Feed from './Feed';
import { loadPosts } from '../../api/api';

describe('Feed', () => {
  initStoryshots({
    storyKindRegex: /^Feed$/,
    renderer: shallow,
  });

  const defaultProps = {
    onNewPostClicked: jest.fn(),
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
    }],
  };

  it('executes callback when creating a new post', () => {
    const wrapper = shallow(<Feed {...defaultProps} />).dive();

    wrapper.find('[data-test-id="new-post"]').simulate('click');

    expect(defaultProps.onNewPostClicked).toHaveBeenCalled();
  });
});
