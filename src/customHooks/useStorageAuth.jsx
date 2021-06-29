import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase';

// custom hook for firebase storage which will take filename and return file url progress and error

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();
  const [url, setUrl] = useState();

  // It will run everytime when there is change in file.
  useEffect(() => {
    // references
    const parentRef = projectStorage.ref('currentUser.uid');

    const storageRef = parentRef.child(file.name);
    // const storageRef = projectStorage.ref(file.name);
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
      const fileUrl = await storageRef.getDownloadURL();
      setUrl(fileUrl);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;
