/* eslint-disable react/jsx-key */
import { copyToClipboard, delay } from '@/lib/helpers';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { useState } from 'react';

function CopyButton({ content }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    copyToClipboard(content);
    setCopied(true);
    await delay(2000);
    setCopied(false);
  };

  return (
    <button
      className="copy-button"
      type="button"
      disabled={copied}
      onClick={handleClick}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

export function CodeBlock({ children }) {
  const language = children.props.className.split('-')[1];
  const content = children.props.children.trim();

  return (
    <div className="code-block">
      <Highlight {...defaultProps} code={content} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            <CopyButton content={content} />
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
