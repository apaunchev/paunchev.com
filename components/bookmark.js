import { useEffect, useState } from 'react';

export function Bookmark({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.microlink.io?url=${url}`);
      const json = await response.json();

      setData(json.data);
    };

    fetchData();
  }, [url]);

  if (!data) {
    return (
      <div className="bookmark bookmark--loading">
        <div className="bookmark__image"></div>
        <div className="bookmark__content">
          <div className="bookmark__title" />
          <div className="bookmark__url" />
          <div className="bookmark__description" style={{ width: '90%' }} />
          <div className="bookmark__description" style={{ width: '80%' }} />
        </div>
      </div>
    );
  }

  return (
    <a href={url} className="bookmark">
      {data.image && (
        <div className="bookmark__image">
          <img src={data.image.url} alt="" />
        </div>
      )}
      <div className="bookmark__content">
        <p className="bookmark__title">{data.title}</p>
        <p className="bookmark__url">{data.url}</p>
        <p className="bookmark__description">{data.description}</p>
      </div>
    </a>
  );
}
