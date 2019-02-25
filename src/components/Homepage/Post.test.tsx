import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { shallow } from 'enzyme';

initStoryshots({
  suite: 'Serialized snapshots',
  storyKindRegex: /^Post$/,
  renderer: shallow,
});

initStoryshots({
  suite: 'Image snapshots',
  storyKindRegex: /^Post$/,
  test: imageSnapshot(),
});
