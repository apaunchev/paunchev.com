import { useEffect, useState } from 'react';

const useData = (data, type) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!type) {
      if (items !== data) {
        setItems(data);
        return;
      }
    }

    const filtered = data.filter(item => item.type === type);

    setItems(filtered);
  }, [type]);

  return { items, type };
};

export default useData;
