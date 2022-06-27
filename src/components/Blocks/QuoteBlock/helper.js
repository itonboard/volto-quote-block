export function getBodyTemplate(variationId, config) {
  const variationsConfig = config.blocks.blocksConfig['quote'].variations;
  let BodyTemplate = '';

  if (variationId) {
    for (let variation in variationsConfig) {
      if (variationsConfig[variation].id === variationId) {
        BodyTemplate = variationsConfig[variation].template;
      }
    }
  }
  return BodyTemplate;
}

export function getDefaultBodyTemplate(config) {
  const variationsConfig = config.blocks.blocksConfig['quote'].variations;
  let BodyTemplate = '';
  let variationId = '';

  for (let variation in variationsConfig) {
    if (variationsConfig[variation].isDefault === true) {
      variationId = variationsConfig[variation].id;
      BodyTemplate = variationsConfig[variation].template;
    }
  }
  return {
    bodyTemplate: BodyTemplate,
    variationId: variationId,
  };
}
