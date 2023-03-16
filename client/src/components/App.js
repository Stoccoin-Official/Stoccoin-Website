import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const res = await axios.get('/api/stocks');
      setStocks(res.data);
    };

    fetchStocks();
  }, []);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/stocks">Stocks</Nav.Link>
            <Nav.Link as={Link} to="/cryptos">Cryptos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <h1>Welcome to Stock Tracker</h1>
        </Route>
        <Route path="/stocks">
          <h2>Stocks</h2>
          <ul>
            {stocks.map(stock => (
              <li key={stock._id}>{stock.name} - {stock.price}</li>
            ))}
          </ul>
        </Route>
        <Route path="/cryptos">
          <h2>Cryptos</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
