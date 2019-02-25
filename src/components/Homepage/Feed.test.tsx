import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { shallow } from 'enzyme';

import Feed from './Feed';
import { loadPosts } from '../../api/api';

jest.mock('../../api/api');

describe('Feed', () => {
  initStoryshots({
    suite: 'Serialized snapshots',
    storyKindRegex: /^Feed$/,
    renderer: shallow,
  });

  initStoryshots({
    suite: 'Image snapshots',
    storyKindRegex: /^Feed/,
    test: imageSnapshot(),
  });

  const defaultProps = {
    onNewPostClicked: jest.fn(),
    posts: [],
  };

  it('executes callback when creating a new post', () => {
    loadPosts.mockResolvedValue([]);
    const wrapper = shallow(<Feed {...defaultProps} />).dive();

    wrapper.find('[data-test-id="new-post"]').simulate('click');

    expect(defaultProps.onNewPostClicked).toHaveBeenCalled();
  });
});
