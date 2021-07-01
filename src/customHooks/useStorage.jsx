import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase';

// custom hook for firebase storage which will take filename and return file url progress and error

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();
  const [url, setUrl] = useState();

  // It will run everytime when there is change in file.
  useEffect(() => {
    // storage references
    const storageRef = projectStorage.ref(file.name);

    // firestore references
    const collectionRef = projectFirestore.collection('images');

    // snapshot of file at every state change
    storageRef.put(file).on('state_changed', (snapshot) => {
      const percentageOfUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentageOfUpload);
    },
    // Below function will run if upload had error
    (err) => {
      setError(err);
    },

    // Below function will run when file upload is successfull.
    async () => {
      try {
        const fileUrl = await storageRef.getDownloadURL();
        setUrl(fileUrl);
        const documentTimestamp = timestamp();
        collectionRef.add({ imgUrl: fileUrl, createdAt: documentTimestamp });
      } catch (err) {
        setError(err);
      }
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;
