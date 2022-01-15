import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvent from './NumberOfEvent';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

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
    getData = () => {
      const {locations, events} = this.state;
      const data = locations.map((location)=>{
        const number = events.filter((event) => event.location === location).length
        const city = location.split(',').shift()
        return {city, number};
      })
      return data;
    };

  render() {
    return (
      <div className="App">
        <h2>Welcome to My Meet App!</h2>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvent numberOfEvents={this.state.numberOfEvents} changeNumberOfEvents={this.updateEvents} />
               
        <h4>Events in each city</h4>

        <ScatterChart
          width={400}
          height={400}
          margin={{
          top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
      <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
          <EventList events={this.state.events} />
      </div>
    );
  } 
};

export default App;

