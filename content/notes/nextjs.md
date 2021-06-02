---
title: 'Next.js'
updatedAt: '2021-05-09 19:39:02'
published: true
---

# Next.js

## Snippets

### Read Firestore data in Next.js

```javascript
// pages/api/doc.js

import db from '@/lib/firestore';

export default async (req, res) => {
  const doc = await db.collection('collection').limit(1).get();

  if (doc.empty) {
    return res.status(200).json({});
  }

  return res.status(200).json(doc.docs[0].data());
};
```

```javascript
// lib/firestore.js

import admin from 'firebase-admin';

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: (process.env.FIREBASE_PRIVATE_KEY ?? '').replace(
        /\\n/gu,
        '\n',
      ),
      project_id: process.env.FIREBASE_PROJECT_ID,
    }),
  });
} catch (error) {
  // Skip the "already exists" message as it is not an actual error
  // when we are hot-reloading.
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
```
