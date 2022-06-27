import React from 'react';
import config from '@plone/volto/registry';
import { getBodyTemplate } from './helper';

const QuoteBlockView = (props) => {
  const { data } = props;
  let BodyTemplate = getBodyTemplate(data?.variation, config);

  return <BodyTemplate data={data} isEditMode={false} {...props} />;
};
export default QuoteBlockView;
