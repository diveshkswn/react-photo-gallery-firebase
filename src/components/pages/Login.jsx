import React, { useRef, useState } from 'react';
import './Login.css';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth, login } from '../Context/Authcontext';

function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser } = useAuth();

  async function handleSubmit(event) {
    setLoading(true);
    try {
      setError('');

      event.preventDefault();
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (

    <div className="login_main">
      <Text fontSize="3xl" align="center">Login</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" id="email_id" ref={emailRef} />
          <FormHelperText color="white">We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel marginTop="20px">Password</FormLabel>
          <Input type="password" id="password_id" ref={passwordRef} isRequired />
        </FormControl>
        <FormControl isInvalid={error}>
          <Button
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
        Dont have an account? Create new one
        <Link to="/signup">
          <Text color="blue" display="inline"> Signup</Text>
        </Link>
      </Text>
    </div>

  );
}

export default Login;
