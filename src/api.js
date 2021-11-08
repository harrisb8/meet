import { mockData } from './mock-data';
import axios form 'axios';


export const getEvents = async () => {
  return mockData;
};

export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
  };

  export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
  }