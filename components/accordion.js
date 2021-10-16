import { useState } from 'react';

export function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="icon">−</span>
        ) : (
          <span className="icon">+</span>
        )}
        {title}
      </button>
      {isOpen && children}
    </div>
  );
}
