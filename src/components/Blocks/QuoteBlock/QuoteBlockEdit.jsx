import React from 'react';
import QuoteSchema from './QuoteSchema';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { getBodyTemplate, getDefaultBodyTemplate } from './helper';

const QuoteBlockEdit = (props) => {
  const { block, data, onChangeBlock, selected, intl } = props;
  const schema = QuoteSchema(config, intl);
  let BodyTemplate = '';
  let variationId = '';

  if (!!data?.variation) {
    BodyTemplate = getBodyTemplate(data.variation, config);
    variationId = data.variation;
  } else {
    [BodyTemplate, variationId] = getDefaultBodyTemplate(config);
  }

  React.useEffect(() => {
    onChangeBlock(block, {
      ...data,
      variation: variationId,
    });
    /* eslint-disable-next-line */
  }, []);

  return (
    <>
      <BodyTemplate
        onChangeBlock={onChangeBlock}
        isEditMode={true}
        {...props}
      />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          title={schema.title}
          schema={schema}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default QuoteBlockEdit;
