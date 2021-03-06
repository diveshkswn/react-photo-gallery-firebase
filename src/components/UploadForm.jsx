import React, { useState } from 'react';
import './UploadForm.css';
import {
  useToast,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
} from '@chakra-ui/react';
import ProgressBar from './ProgressBar';
import User from './User';

function UploadForm() {
  const toast = useToast();
  const [file, setFile] = useState();
  const [error, setError] = useState(false);
  const imgTypes = ['image/jpeg', 'image/png'];

  function changeHandler(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile && imgTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setError(true);
      toast({
        title: 'Invalid File',
        description: 'Please select a valid file format. (Supported formats are jpeg, png )',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <div className="uploadForm_main">
      <FormControl className="uploadForm_Form" maxWidth="50%">
        <FormLabel fontSize="3xl">Upload Image</FormLabel>
        <Input type="file" onChange={changeHandler} />
        <FormHelperText color="whiteAlpha">We will never share your Images with anyone.</FormHelperText>
        {file && <ProgressBar file={file} setFile={setFile} />}
      </FormControl>

      {/* <div className="uploadForm_userDetails">
        <User />
      </div> */}
      <div className="uploadForm_userDetails">
        <Text color="White" fontSize="3xl" display="block">
          Build by
          <a href="https://diveshkswn.github.io/portfolio_/">
            <Text color="blue.700" fontWeight="extrabold" display="inline"> Divesh</Text>
            {' '}
          </a>
        </Text>
      </div>

    </div>

  );
}

export default UploadForm;
