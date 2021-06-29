/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import { Progress, useToast } from '@chakra-ui/react';
import useStorage from '../customHooks/useStorage';

function ProgressBar(props) {
  const toast = useToast();

  const { file, setFile } = props;
  const { url, progress, error } = useStorage(file);
  console.log(url);
  // useEffect for file upload toast
  useEffect(() => {
    if (url && progress === 100) {
      toast({
        title: 'File Uploaded',
        description: `File with name ${file.name} is uploaded`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
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
      {(url === undefined) && progressBarChakraUI()}
      {/* {(progress < 99 && url === undefined) && progressBarChakraUI()} */}

    </>

  );
}

export default ProgressBar;
