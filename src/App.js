import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvent from './NumberOfEvent';
import { checkToken, extractLocations, getAccessToken, getEvents } from './api';
import "./nprogress.css";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  };

 
 // class App extends Component {
    

    // componentDidMount() {
      //this.mounted = true;
      //getEvents().then((events) => {
        //if ( this.mounted) {
          //this.setState({ events, locations: extractLocations(events) });
        //}
      //});
    //}
      async componentDidMount() {
        this.mounted = true;
        const accessToken = localStorage.getItem('access_token');
        const isTokenValid = (await checkToken(accessToken)).error ? false : true;
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get("code");
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
        if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
        }
        });
        }
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
    if (this.state.showWelcomeScreen === undefined)
    return (
      <div className="App">
        <h2>Welcome to My Meet App!</h2>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvent numberOfEvents={this.state.numberOfEvents} changeNumberOfEvents={this.updateEvents} />
               
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart 
              margin={{
              top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
          <EventList events={this.state.events} />
          {/* Other components such as CitySearch, EventList,...etc */}
<WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  } 
};


export default App;
