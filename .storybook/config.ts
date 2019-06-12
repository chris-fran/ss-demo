import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'bulma/css/bulma.css';

import '../src/index.css';

// automatically import all files ending in *.stories.tsx
const req = requireContext('../src/stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
