/* eslint-disable react/jsx-key */
import clsx from 'clsx';
import { useState } from 'react';
import { Check, Copy } from 'react-feather';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import { delay } from 'lib/helpers';

function CopyButton({ content }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    await delay(2000);
    setCopied(false);
  };

  return (
    <button
      className="absolute top-2 right-2 py-2 px-3 bg-white border-0 rounded-md text-zinc-800 cursor-pointer disabled:cursor-not-allowed transition hover:opacity-90"
      type="button"
      disabled={copied}
      aria-label="Copy"
      title="Copy"
      onClick={handleClick}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function CodeBlock({ children }) {
  const language = children.props.className.split('-')[1];
  const content = children.props.children.trim();

  return (
    <div className="lg:-mx-14 relative">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={content}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(className, 'p-4 lg:p-6 rounded-md')}
            style={style}
          >
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
