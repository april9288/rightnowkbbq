const initialState = {
  data: [],
  position: [],
  status: "REQUEST_LOADING"
}

export const reducerGetRestaurants = (state=initialState, action={}) => {
  switch(action.type){
    // case "REQUEST_LOADING":
    //   return Object.assign({}, state, {status: "REQUEST_LOADING"})
    case "REQUEST_DENIED":
      return Object.assign({}, state, {status: "REQUEST_DENIED"})
    case "REQUEST_BAD":
      return Object.assign({}, state, {status: "REQUEST_BAD"})
    case "LOCATION_UPDATE": 
      return Object.assign({}, state, {position: action.payload})
    case "REQUEST_SUCCESS":
      return Object.assign({}, state, {data: action.payload, status: "REQUEST_SUCCESS"})
    default:
      return state
  }
}