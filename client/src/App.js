import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';
import Crypto from './components/Crypto';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">Stock Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {user ? (
              <>
                <Nav.Link href="/stocks">Stocks</Nav.Link>
                <Nav.Link href="/crypto">Crypto</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <h1>Welcome to Stock Tracker</h1>
        </Route>
        <Route path="/login">
          <LoginForm setUser={setUser} />
        </Route>
        <Route path="/register">
          <RegisterForm setUser={setUser} />
        </Route>
        <PrivateRoute path="/dashboard" user={user}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/stocks" user={user}>
          <Stocks />
        </PrivateRoute>
        <PrivateRoute path="/crypto" user={user}>
          <Crypto />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
