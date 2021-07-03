import React, { useRef, useState } from 'react';
import './Signup.css';
import {
  FormControl,
  Text,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useHistory, Link } from 'react-router-dom';
import { signup } from '../Context/Authcontext';

function Signup() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef();
  const nameRef = useRef();
  const passswordRef = useRef();

  async function handleSubmit(event) {
    setLoading(true);
    try {
      event.preventDefault();
      const user = await signup(emailRef.current.value, passswordRef.current.value);
      user.user.updateProfile({ displayName: nameRef.current.value });
      history.push('/login');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="signup_main">
      <Text fontSize="3xl" align="center">Sign Up</Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" id="email_id" ref={emailRef} />
          <FormHelperText color="white">We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel marginTop="20px">Name</FormLabel>
          <Input type="text" id="name_id" ref={nameRef} isRequired />
        </FormControl>
        <FormControl isRequired>
          <FormLabel marginTop="20px">Password</FormLabel>
          <Input type="password" id="password_id" ref={passswordRef} isRequired />

        </FormControl>

        <FormControl isInvalid={error}>
          <Button
            onSubmit={handleSubmit}
            mt={4}
            colorScheme="teal"
            isLoading={loading}
            type="submit"
          >
            Submit
          </Button>
          <FormErrorMessage fontSize="large" fontWeight="extrabold" color="ActiveCaption">{error}</FormErrorMessage>
        </FormControl>
      </form>
      <Text fontSize="xl" align="center">
        Already have an account?
        <Link to="/login">
          <Text color="blue" display="inline"> Login</Text>
        </Link>
      </Text>
    </div>

  );
}

export default Signup;
