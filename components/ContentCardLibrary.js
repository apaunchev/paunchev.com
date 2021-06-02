import ContentCard from '@/components/ContentCard';

export default function ContentCardLibrary({
  url,
  title,
  author,
  description,
  quote,
  image,
}) {
  return (
    <ContentCard
      key={url}
      url={url}
      title={title}
      subtitle={author}
      description={description}
      extra={
        quote ? (
          <div className="content-card__quote">
            <i>‘{quote}’</i>
          </div>
        ) : null
      }
      image={image}
    />
  );
}
