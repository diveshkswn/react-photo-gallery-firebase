/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import { Progress, useToast } from '@chakra-ui/react';
import useStorage from '../customHooks/useStorageAuth';

function ProgressBar(props) {
  const toast = useToast();

  const { file, setFile, currentUser } = props;

  const { url, progress, error } = useStorage(file, currentUser && currentUser.uid);

  // useEffect for file upload success/failure toast

  useEffect(() => {
    if (url && progress === 100) {
      toast({
        title: 'File Uploaded',
        description: `File with name ${file.name} is uploaded`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setFile(null);
    }

    if (error) {
      toast({
        title: 'File Failed to Uploaded',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [url, error]);

  function progressBarChakraUI() {
    return (
      <Progress value={progress} size="sm" colorScheme="blue" />
    );
  }

  return (
    <>
      {file && progressBarChakraUI()}

    </>

  );
}

export default ProgressBar;
