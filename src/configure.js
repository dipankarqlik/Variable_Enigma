import { embed } from '@nebula.js/stardust';

import barchart from '@nebula.js/sn-bar-chart';

import actionButton from '@nebula.js/sn-action-button';

import combochart from '@nebula.js/sn-combo-chart';

import scatterplot from '@nebula.js/sn-scatter-plot';

const n = embed.createConfiguration({
  context: {
    theme: 'dark',
    language: 'en-US',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(linechart),
    },

    {
      name: 'action-button',
      load: () => Promise.resolve(actionButton),
    },

    {
      name: 'table',
      load: () => Promise.resolve(table),
    },

    {
      name: 'combochart',
      load: () => Promise.resolve(combochart),
    },

    {
      // register the scatterplot
      name: 'scatterplot',
      load: () => Promise.resolve(scatterplot),
    },

  ],
});

export default n;
