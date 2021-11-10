import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvent from './NumberOfEvent';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvent: 32
  };

 // class App extends Component {
    

    componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if ( this.munted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  

    componentWillUnmount() {
      this.mounted = false;
    }

  updateEvents = (location, numberOfEvent) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvent: 32,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvent numberOfEvent={this.state.numberOfEvent} />
      </div>
    );
  } 
};

export default App;

