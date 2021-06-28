import React from 'react';
import { Progress } from '@chakra-ui/react';
import useStorage from '../customHooks/useStorage';

function ProgressBar(props) {
  const { file, setFile } = props;
  const { url, progress, error } = useStorage(file);
  console.log(progress);
  console.log(url);
  return (
    <Progress value={progress} size="xs" colorScheme="blue" />
  );
}

export default ProgressBar;
