import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';
import WelcomeScreen from './WelcomeScreen';


export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://7ngty425jb.execute-api.eu-central-1.amazonaws.com/dev/api/token/${accessToken}`
    //`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error);

    return result;
};

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith('http://localhost'))
  {
    NProgress.done();
    return mockData;
  }
  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    // console.log(events);
    return data ? JSON.parse(data).events:[];;
  }
  
  const token = await getAccessToken(); 

  if (token) {
    removeQuery();
    const url = 'https://accounts.google.com/o/oauth2/auth' + '/' + token;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    } 
    NProgress.done();
    return result.data.events;
  }
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
          "https://7ngty425jb.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
        );
        const { authUrl } = results.data;
        return (window.location.href = authUrl);
      }
      return code && getToken(code);
    }
      return accessToken;
  }

export const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    'https://harrisb8.github.io/meet/' + '/' + encodeCode  
     )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

    access_token && localStorage.setItem("access_token", access_token)
}

 export  const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
        window.history.pushState("", "", newurl);
     } else {
       newurl = window.location.protocol + "//" + window.location.host;
       window.history.pushState("", "", newurl);
     }
   };
