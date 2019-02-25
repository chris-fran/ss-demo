import initStoryshots from '@storybook/addon-storyshots';
import { shallow } from 'enzyme';

initStoryshots({
  storyKindRegex: /^Post$/,
  renderer: shallow,
});
