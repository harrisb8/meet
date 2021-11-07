import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  class App extends Component {
    render() {
      return (
        <div className="App">
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <EventList events={this.state.events} />
        </div>
      );
    } 
  }
    componentDidMount() {
      getEvents().then((events) => {
        this.setState({ events, locations: extractLocations(events) });
      });
    }

    componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if ( this.munted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    componentWillUnmount(){
      this.mounted = false;
    }
    
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

export default App;

