/* Action types */
export const FETCH_REGION = 'FETCH_REGION';
export const REQUEST_C1_RECAP = 'REQUEST_C1_RECAP';
export const RECEIVE_C1_RECAP = 'RECEIVE_C1_RECAP';

/* Action creators */
export function fetchRegion(region) {
  return {
    type: FETCH_REGION,
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
  return {
    type: RECEIVE_C1_RECAP,
    region,
    recapitulation: json.data.results.data.children.map(child => child.data)
  }
}