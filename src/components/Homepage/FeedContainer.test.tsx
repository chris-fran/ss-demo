import React from 'react';
import { shallow } from 'enzyme';

import FeedContainer from './FeedContainer';
import { loadPosts } from '../../api/api';

jest.mock('../../api/api');

describe('FeedContainer', () => {
  it('renders the presentational component', () => {
    loadPosts.mockResolvedValue([]);
    const wrapper = shallow(<FeedContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the presentational component with error', () => {
    loadPosts.mockRejectedValue(new Error('failure'));
    const wrapper = shallow(<FeedContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
