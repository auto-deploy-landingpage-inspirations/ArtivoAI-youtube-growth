// CopyToClipboardButton.tsx
import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
        <button className='text-zinc-400'>{isCopied ? 'Copied!' : <Copy className='h-5 w-5'/>}</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyToClipboardButton;
