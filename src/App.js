import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationListCont from './containers/LocationListCont';
import ForecastExtendedCont from './containers/ForecastExtendedCont'

const cities = [
  'Cartaya',
  'Ushuaia',
  'Anchorage',
  'London'
]

class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListCont cities={cities}>
            </LocationListCont>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={9}>
              <div className="details">
                  <ForecastExtendedCont></ForecastExtendedCont>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;