import { mockData } from './mock-data';
import axios form 'axios';


const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

    return result;
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://ww.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
  .then((res) => res.json())
  .catch((error) => error.json());

  return result;
};

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
    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
      await localStorage.removeItem("access_token");
      const seacrchParams = new URLSearchParams(window.location.search);
      const code = await seacrchParams.get("code");
      if (!code) {
        const results = await axios.get(
          "https://accounts.google.com/o/oauth2/auth/api/get-auth-url"
        );
        const { authUrl } = results.data;
        return (window.location.href = authUrl);
      }
      return code && getToken(code);
    }
      return accessToken;
  }