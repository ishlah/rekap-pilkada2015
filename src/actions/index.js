import axios from 'axios';

/* Pemilu APIS */
const PEMILU_API_KEY = '5ab827016d21019632ad9ff8a4c6e233';
const RECAP_REGIONS_URL = `http://api.pemiluapi.org/c1-pilkada2015/api/kabupaten_kota?apiKey=${PEMILU_API_KEY}&limit=50`;

/* Action types */
export const SEARCH_REGION = 'SEARCH_REGION';
export const REQUEST_C1_RECAP = 'REQUEST_C1_RECAP';
export const RECEIVE_C1_RECAP = 'RECEIVE_C1_RECAP';

/* Action creators */
export function searchRegion(region) {
  return {
    type: SEARCH_REGION,
    region
  };
}

export function requestC1Recap(region) {
  // governed by network request
  return {
    type: REQUEST_C1_RECAP,
    region
  }
}

export function receiveC1Recap(region, json) {
  console.log(region, json.data.data.results.data);

  return {
    type: RECEIVE_C1_RECAP,
    region,
    recapitulation: json.data.data.results.data
  }
}

/* Async call to fetch searched region */
export function fetchRegion(region) {
  let url = `${RECAP_REGIONS_URL}&lokasi=${region}`;

  console.log('fetching $', region)

  return function(dispatch) {
    // Search
    dispatch(searchRegion(region));
    // Change status to fetching
    dispatch(requestC1Recap(region));
    // get the data
    return axios.get(url)
      .then(response => dispatch(receiveC1Recap(region, response)));
  }
}