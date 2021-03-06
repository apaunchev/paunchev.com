import db from '@/lib/firestore';

export default async (req, res) => {
  const latestReport = await db
    .collection('reports')
    .orderBy('createdAt', 'desc')
    .limit(1)
    .get();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200',
  );

  if (latestReport.empty) {
    return res.status(200).json({});
  }

  return res.status(200).json(latestReport.docs[0].data());
};
