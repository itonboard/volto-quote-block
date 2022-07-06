import messages from './messages';
const QuoteSchema = (config, intl) => {
  const variationsConfig = config.blocks.blocksConfig['quote'].variations;
  const variations = Object.keys(variationsConfig).map((variation) => [
    variationsConfig[variation].id,
    variationsConfig[variation].title,
  ]);

  return {
    title: intl.formatMessage(messages.settingsTitle),
    required: ['quote'],
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['variation', 'quote', 'author'],
      },
    ],
    properties: {
      variation: {
        title: intl.formatMessage(messages.variation),
        type: 'array',
        choices: [...variations],
      },
      quote: {
        title: intl.formatMessage(messages.Quote),
        type: 'string',
        widget: 'textarea',
        placeholder: intl.formatMessage(messages.QuotePlaceholder),
      },
      author: {
        title: intl.formatMessage(messages.Author),
        description: intl.formatMessage(messages.AuthorDescription),
        type: 'string',
        placeholder: intl.formatMessage(messages.AuthorPlaceholder),
      },
    },
  };
};

export default QuoteSchema;
