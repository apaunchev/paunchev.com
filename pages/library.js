import Layout from '@/components/Layout';
import LibraryItem from '@/components/LibraryItem';
import PageHeader from '@/components/PageHeader';
import library from '@/data/library.json';
import useData from 'hooks/useData';
import { useState } from 'react';

const pageInfo = {
  title: 'Library',
  description:
    'A public library of sorts, showcasing briliant, insightful and inspiring content and people from around the web.',
};

export default function Library() {
  const [filter, setFilter] = useState('');
  const filteredLibrary = useData(library.data, filter);

  const onFilterChange = event => setFilter(event.target.value);

  return (
    <Layout {...pageInfo}>
      <PageHeader title={pageInfo.title} subtitle={pageInfo.description} />
      <select className="mb-8 p-2" onChange={onFilterChange}>
        <option value="">filter by type</option>
        {library.types.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {filteredLibrary.items.length > 0 ? (
        <div className="grid grid-cols-library gap-12">
          {filteredLibrary.items.map(item => (
            <LibraryItem key={item.url} {...item} />
          ))}
        </div>
      ) : null}
    </Layout>
  );
}
