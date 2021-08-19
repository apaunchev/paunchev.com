import { useState } from 'react';
import { Plus, Minus } from 'react-feather';

export function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Minus className="icon" width={16} height={16} />
        ) : (
          <Plus className="icon" width={16} height={16} />
        )}
        {title}
      </button>
      {isOpen && children}
    </div>
  );
}
