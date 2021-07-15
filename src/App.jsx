import './App.css';
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ImageDashboard from './components/pages/ImageDashboard';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import AuthProvider from './components/Context/Authcontext';
import PrivateRoute from './PrivateRoute';

function App() {
  useEffect(() => { console.log(process.env.REACT_APP_FIREBASE_APIKEY); }, []);
  return (

    <AuthProvider>
      <ChakraProvider>
        <div className="App">
          <div className="title_content">
            {' '}
            <h2 className="title_heading">Photo Gallery</h2>
          </div>

          <div className="app_content_glass">
            <Router>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/" component={ImageDashboard} />
                <Route path="*">
                  {' '}
                  <Redirect to="/" />
                </Route>
              </Switch>
            </Router>

          </div>
        </div>
      </ChakraProvider>
    </AuthProvider>

  );
}

export default App;
