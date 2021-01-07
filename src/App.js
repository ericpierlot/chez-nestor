import React from 'react';
import GlobalStyles from './assets/GlobalStyles';
import Listing from './Listing';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CreatePage from './CreatePage';
import { Home } from './Home';
import { DetailsApartmentById } from './components/Details/DetailsApartmentById';
import { DetailsRoomById } from './components/Details/DetailsRoomById';
import { DetailsClientById } from './components/Details/DetailsClientById';
import { DetailsBookingById } from './components/Details/DetailsBookingById';
import LogoChezNestor from './assets/images/logo.png';
import styled, { ThemeProvider } from 'styled-components';
import { normalTheme } from './assets/StyledThemes';

const Header = styled.header`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #1d2c49;
`;

const App = () => {
  return (
    <ThemeProvider theme={normalTheme}>
      <Router>
        <GlobalStyles />
        <Header>
          <Link to='/'>
            <img src={LogoChezNestor} alt='Chez-Nestor logo' />{' '}
          </Link>
        </Header>
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          {/* LISTING ROUTE */}
          <Route path='/list/:choice' exact component={() => <Listing />} />
          {/* CREATE ROUTE */}
          <Route
            path='/create/:choice'
            exact
            component={() => <CreatePage />}
          />
          {/* DETAILS BY ID ROUTE */}
          <Route
            path='/list/apartments/apartments/:id'
            exact
            component={() => <DetailsApartmentById />}
          />
          <Route
            path='/list/rooms/rooms/:id'
            exact
            component={() => <DetailsRoomById />}
          />
          <Route
            path='/list/clients/clients/:id'
            exact
            component={() => <DetailsClientById />}
          />
          <Route
            path='/list/bookings/bookings/:id'
            exact
            component={() => <DetailsBookingById />}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
