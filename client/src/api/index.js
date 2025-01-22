import axios from 'axios';
const  serverURL = 'http://localhost:3000';
const TravelAPi = {
    getTrip: () => axios.get('${serverUrl}/api/trip'),
    getActivity:  () => axios.get('${serverUrl}/api/activity'),
    postTrip: (payload) => axios.get('${serverUrl}/api/trip'),
    postActivity:  (payload) => axios.get('${serverUrl}/api/activity'),
}
