/* eslint-disable react/jsx-key */
import clsx from 'clsx';
import { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';
import { delay } from 'lib/helpers';

const copyToClipboard = content => {
  const el = document.createElement('textarea');
  el.value = content;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

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
      className="absolute top-2 right-2 py-2 px-3 bg-white font-sans text-zinc-800 text-sm border-0 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:text-zinc-500"
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
    <div className="lg:-mx-14">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={content}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(className, 'relative p-6 overflow-auto rounded-md')}
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
