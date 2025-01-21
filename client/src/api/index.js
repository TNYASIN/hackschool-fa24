import axios from 'axios';
const  serverURL = 'https://tripsandactivities.onrender.com';
const TravelAPi = {
    getTrip: () => axios.get('${serverUrl}/api/trip');
    getActivity:  () => axios.get('${serverUrl}/api/activity');
    postTrip: (payload) => axios.get('${serverUrl}/api/trip');
    postActivity:  (payload) => axios.get('${serverUrl}/api/activity');
}
