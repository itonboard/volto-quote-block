import blockIcon from '@plone/volto/icons/quote.svg';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import { QuoteBlockEdit, QuoteBlockView } from './components/Blocks/QuoteBlock';
import { DefaultQuoteView } from './components/Blocks/QuoteBlock/Variations';

const applyConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    quote: {
      id: 'quote',
      title: 'Block Quote',
      icon: blockIcon,
      group: 'text',
      view: QuoteBlockView,
      edit: QuoteBlockEdit,
      schema: BlockSettingsSchema,
      restricted: false,
      blockHasOwnFocusManagement: false,
      sidebarTab: 1,
      security: {
        addPermission: [],
        view: [],
      },
      variations: [
        {
          id: 'default',
          isDefault: true,
          title: 'Default',
          template: DefaultQuoteView,
        },
      ],
    },
  };
  return config;
};

export default applyConfig;
