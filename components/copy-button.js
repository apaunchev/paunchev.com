import { delay } from '@/lib/helpers';
import { useState } from 'react';

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

export function CopyButton({ content }) {
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
