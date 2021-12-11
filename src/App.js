import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvent from './NumberOfEvent';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  };

 
 // class App extends Component {
    

    componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if ( this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  

    componentWillUnmount() {
      this.mounted = false;
    }

  updateEvents = (location, numberOfEvents) => {
    let eventsQ = numberOfEvents || 32;
    location = location || 'all';
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        locationEvents = locationEvents.slice(0, eventsQ)
      this.setState({
        events: locationEvents,
        numberOfEvents: eventsQ,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to My Meet App!</h2>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvent numberOfEvents={this.state.numberOfEvents} changeNumberOfEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  } 
};

export default App;

