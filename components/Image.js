import { useState, useEffect } from "react";

const getRandomColor = () => {
  const colors = [
    "rgb(251, 207, 213)",
    "rgb(254, 237, 208)",
    "rgb(187, 231, 229)",
    "rgb(143, 213, 252)",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export default ({ src, ...rest }) => {
  const [color, setColor] = useState(null);

  useEffect(() => setColor(getRandomColor()), []);

  return (
    <figure className={`${rest.className ? `${rest.className} ` : null}Image`}>
      <div className="Image__container">
        <div
          className="Image__image"
          style={
            src
              ? { backgroundImage: `url(${src})` }
              : { backgroundColor: color }
          }
        />
      </div>
    </figure>
  );
};
