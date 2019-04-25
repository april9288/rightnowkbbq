import axios from 'axios'

export const actionGetRestaurants = () => async (dispatch) => {
	const locationPromise = new Promise((res, rej) => {
      window.navigator.geolocation.getCurrentPosition(res,rej)
    })
    let locationResult
    let denided = false
    try{
      locationResult = await locationPromise
    }catch(e){
      denided = true
      dispatch({type: "REQUEST_DENIED"})
    }

    if (!denided) {
      let latitude = locationResult.coords.latitude
      let longitude = locationResult.coords.longitude
      dispatch({type: "LOCATION_UPDATE", payload: [latitude,longitude]})
      try{
        let yelpResult = await axios.get(`https://rightnowkbbq.herokuapp.com/yelp?lat=${latitude}&lon=${longitude}`)   
        dispatch({type: "REQUEST_SUCCESS", payload: yelpResult.data});
      }catch(e){
        dispatch({type: "REQUEST_BAD"})
      }
    }
}