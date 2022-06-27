import React from 'react';
import './DefaultQuoteView.less';
import { Message } from 'semantic-ui-react';
import { useIntl } from 'react-intl';
import messages from '../messages';

const DefaultQuoteView = (props) => {
  const { data, isEditMode } = props;
  const intl = useIntl();

  return (
    <>
      {isEditMode && !data?.quote ? (
        <div className="block quote default empty">
          <Message>
            <h4>{intl.formatMessage(messages.PleaseFillData)}</h4>
          </Message>
        </div>
      ) : (
        <div className="block quote default">
          {data?.quote && (
            <figure>
              <blockquote>
                <p>{data.quote}</p>
              </blockquote>
              {data.author && <figcaption>— {data.author}</figcaption>}
            </figure>
          )}
        </div>
      )}
    </>
  );
};

export default DefaultQuoteView;
