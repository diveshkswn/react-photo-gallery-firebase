import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //   collection images
    const unsubscribeFirestore = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc') // order by using property createdAt which is there in documents
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((eachDoc) => {
          documents.push({ ...eachDoc.data(), id: eachDoc.id });
        });
        setDocs(documents);
      });

    return () => unsubscribeFirestore();
  },
  [collection]);
  return { docs };
}

export default useFirestore;
