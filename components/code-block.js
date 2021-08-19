/* eslint-disable react/jsx-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { CopyButton } from '@/components/copy-button';

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
