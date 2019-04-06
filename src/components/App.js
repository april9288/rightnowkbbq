import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
  //<Scroll /> contains both <Status /> and <CardHolder />
  import Scroll from './Scroll';
    import Status from './Status';
    import CardHolder from './CardHolder';
import Footer from './Footer';

class App extends Component {
  state={
    status: null,
    data: null,
    position: []
  }

  //Once everything is mounted, then we start fetching data
  componentDidMount() {
    this.getRestaurants()
  }

  //To fetch data
      //first, we ask permission to track user's location. 
          //This is done by web geolocation api
      //second, we send its location data to Yelp api to search nearby
          //once we receive data, then update state
  getRestaurants = async () => {
    const locationPromise = new Promise((res, rej) => {
      window.navigator.geolocation.getCurrentPosition(res,rej)
    })
    let locationResult
    try{
      locationResult = await locationPromise
    }catch(e){
      return this.setState({status: "denied"});
    }
    let latitude = locationResult.coords.latitude
    let longitude = locationResult.coords.longitude
    let yelpResult
    try{
      if (process.env.NODE_ENV === "development") {
        yelpResult = await axios.get(`https://rightnowkbbq.herokuapp.com/mock`)
      } else {
        yelpResult = await axios.get(`https://rightnowkbbq.herokuapp.com/yelp?lat=${latitude}&lon=${longitude}`)
      }        
      this.setState({status: yelpResult.status, data: yelpResult.data, position: [latitude,longitude]});
    }catch(e){
      this.setState({status: e.response.status});
    }
  } 

  //To check the fetched data status whether it's ok or not.
      //if there is no status, then return "loading" sign
  display = () => {
    if (this.state.status === null) {
      return <Status code={"loading"} />
    } else if (this.state.status === "denied") {
      return <Status code={"denied"} />
    } else if (this.state.status === 200 && this.state.data !== null) {
      return <CardHolder data={this.state.data} position={this.state.position}/>
    } else {
      return <Status code={"bad"} />
    }
  }

  render() {
    return (
      <section className="App">

        <Header />
            <Scroll>
                {this.display()}
            </Scroll>
        <Footer />

      </section>
    );
  }
}

export default App;
