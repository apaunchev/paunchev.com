import { useEffect, useState } from 'react';

const useData = (data, type) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!type) {
      setItems(data);
      return;
    }

    setItems(data.filter(item => item.type === type));
  }, [type]);

  return { items, type };
};

export default useData;
