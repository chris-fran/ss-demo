import initStoryshots from '@storybook/addon-storyshots';
import { shallow } from 'enzyme';

initStoryshots({
  storyKindRegex: /^Feed$/,
  renderer: shallow,
});
